class AddWatchableToWatches < ActiveRecord::Migration[5.2]
  def change
    remove_index :watches, [:asset_id, :asset_type]
    remove_column :watches, :asset_type
    remove_column :watches, :asset_id
    add_reference :watches, :watchable, polymorphic: true
  end
end
