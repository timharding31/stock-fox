class Stock < ApplicationRecord

  validates :exchange, :symbol, :name, :price, presence: true
  validates :exchange, inclusion: { in: ['NASDAQ', 'NYSE'] }

  has_many :watches, as: :watchable

end