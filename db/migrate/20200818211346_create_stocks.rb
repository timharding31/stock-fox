class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :exchange, null: false
      t.string :symbol, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.string :marketcap
      t.string :ipo
      t.string :sector
      t.string :industry
      t.timestamps
    end
  end
end
