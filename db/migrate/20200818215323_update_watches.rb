class UpdateWatches < ActiveRecord::Migration[5.2]
  def change
    remove_index :watches, :asset_id
    add_index :watches, [:asset_id, :asset_type]
  end
end
