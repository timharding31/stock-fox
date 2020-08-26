class UpdateForeignKeys < ActiveRecord::Migration[5.2]
  def change
    change_column :watches, :stock_id, :string
    change_column :holdings, :stock_id, :string
    rename_column :watches, :stock_id, :stock_symbol
    rename_column :holdings, :stock_id, :stock_symbol
  end
end
