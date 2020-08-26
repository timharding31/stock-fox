class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    drop_table :portfolios
    drop_table :portolios
    create_table :holdings do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.decimal :holding_amt, precision: 19, scale: 4, null: false
      t.string :asset_symbol
      t.index :asset_symbol
      t.string :asset_name
    end
    add_reference :holdings, :holdable, polymorphic: true, index: true
  end
end
