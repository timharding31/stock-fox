class CreateCryptos < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptos do |t|
      t.string :symbol, null: false
      t.index :symbol, unique: true
      t.string :name, null: false
      t.integer :price, null: false
      t.string :industry
      t.timestamps
    end
    add_index :stocks, :symbol, unique: true
  end
end
