class User < ApplicationRecord
  include EmailValidatable

  validates :username, :session_token, :password_digest, presence: true
  validates :email, email: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :add_buying_power
  after_create :create_default_watchlist
  attr_reader :password

  has_many :watches, foreign_key: :user_id, class_name: :Watch

  has_many :watched_stocks, through: :watches, source: :stock

  has_many :holdings, foreign_key: :user_id, class_name: :Holding

  has_many :held_stocks, through: :holdings, source: :stock

  def watchlist
    self.watched_stocks.pluck(:symbol)
  end

  def portfolio
    self.holdings.where('holdings.amt > 0')
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user ||= User.find_by(email: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def add_stock_to_watchlist(stock)
    return false if Watch.find_by(user_id: self.id, stock_symbol: stock.symbol)
    Watch.create!(user_id: self.id, stock_symbol: stock.symbol)
    self.watchlist
  end
  
  def remove_stock_from_watchlist(stock)
    watch = Watch.find_by(user_id: self.id, stock_symbol: stock.symbol)
    return false unless watch
    watch.destroy!
    self.watchlist
  end

  def buy_stock(stock, order)
    portfolio_row = Holding.find_by(user_id: self.id, stock_symbol: stock.symbol)
    if self.buying_power >= (order.to_f * stock.price)
      if portfolio_row
        portfolio_row.update(amt: portfolio_row.amt += order.to_f)
      else
        Holding.create!(user_id: self.id, stock_symbol: stock.symbol, amt: order.to_f)
      end
      self.update(buying_power: self.buying_power.to_f - (order.to_f * stock.price.to_f))
    else
      return false
    end
    self.portfolio
  end

  def sell_stock(stock, order)
    portfolio_row = Holding.find_by(user_id: self.id, stock_symbol: stock.symbol)
    if portfolio_row && (portfolio_row.amt - order.to_f) >= 0
      portfolio_row.update(amt: portfolio_row.amt -= order.to_f)
      self.update(buying_power: self.buying_power.to_f + (order.to_f * stock.price.to_f))
    else
      return false
    end
    self.portfolio
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

  def add_buying_power
    self.buying_power = 10000.00
  end

  def create_default_watchlist
    default_stocks = [ 'TWTR', 'TSLA', 'NFLX', 'FB', 'MSFT', 'DIS', 'GPRO',
      'SBUX', 'F', 'BABA', 'BAC', 'FIT', 'GE', 'SNAP', 'AAPL']

    default_stocks.each do |symbol|
      Watch.create!(user_id: self.id, stock_symbol: symbol)
    end
  end

end
