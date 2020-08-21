class ChangePriceColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :price, :decimal, precision: 19, scale: 4, null: false
    change_column :cryptos, :price, :decimal, precision: 19, scale: 4, null: false
  end
end
