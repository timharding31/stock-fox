class UpdateWatchesAndHoldingsTables < ActiveRecord::Migration[5.2]
  def change
    remove_column :watches, :watchable_type
    remove_column :watches, :watchable_id
    add_column :watches, :stock_id, :integer
    add_index :watches, :stock_id
    remove_column :holdings, :holdable_type
    remove_column :holdings, :holdable_id
    remove_column :holdings, :asset_symbol
    remove_column :holdings, :asset_name
    add_column :holdings, :stock_id, :integer
    add_index :holdings, :stock_id
    rename_column :holdings, :holding_amt, :amt
  end
end
