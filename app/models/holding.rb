class Holding < ApplicationRecord

  validates :stock_symbol, uniqueness: { scope: :user_id }

  belongs_to :stock, primary_key: :symbol, foreign_key: :stock_symbol, class_name: :Stock
  
  belongs_to :user, foreign_key: :user_id, class_name: :User

end