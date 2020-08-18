class CreateWatches < ActiveRecord::Migration[5.2]
  def change
    create_table :watches do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.integer :asset_id, null: false
      t.index :asset_id
      t.string :asset_type, null: false
      t.timestamps
    end
  end
end
