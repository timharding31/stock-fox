class Stock < ApplicationRecord

  validates :exchange, :symbol, :name, :price, presence: true
  validates :exchange, inclusion: { in: ['NASDAQ', 'NYSE'] }

  has_many :watches, primary_key: :symbol, foreign_key: :stock_symbol, class_name: :Watch

  has_many :holdings, primary_key: :symbol, foreign_key: :stock_symbol, class_name: :Holding

end