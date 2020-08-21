class User < ApplicationRecord
  include EmailValidatable

  validates :username, :session_token, :password_digest, presence: true
  validates :email, email: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :create_default_watchlist
  attr_reader :password

  has_many :watches

  has_many :watched_stocks,
    through: :watches,
    source: :watchable,
    source_type: 'Stock'

  has_many :watched_cryptos,
    through: :watches,
    source: :watchable,
    source_type: 'Crypto'

  def watchlist
    self.watched_stocks + self.watched_cryptos
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user ||= User.find_by(email: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def add_asset_to_watchlist(asset)
    Watch.create!(user_id: self.id,
      watchable_type: asset.class.name,
      watchable_id: asset.id
    )
    self.watchlist
  end

  def remove_asset_from_watchlist(asset)
    watch = Watch.find_by(user_id: self.id,
      watchable_type: asset.class.name,
      watchable_id: asset.id
    )
    watch.destroy!
    self.watchlist
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def create_default_watchlist

    default_stocks = [ 'TWTR', 'TSLA', 'NFLX', 'FB', 'MSFT', 'DIS', 'GPRO',
      'SBUX', 'F', 'BABA', 'BAC', 'FIT', 'GE', 'SNAP', 'AAPL']

    default_stocks.each do |symbol|
      asset = Stock.find_by(symbol: symbol)
      Watch.create!(user_id: self.id, watchable_type: 'Stock', watchable_id: asset.id)
    end

    btc = Crypto.find_by(symbol: 'BTC')
    Watch.create!(user_id: self.id, watchable_type: 'Crypto', watchable_id: btc.id)

  end

end
