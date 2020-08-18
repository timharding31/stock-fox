class Crypto < ApplicationRecord

  validates :symbol, :name, :price, presence: true

  has_many :watches, as: :watchable
  
end