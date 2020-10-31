class AddModePreference < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :light_mode, :boolean, null: false, default: true
  end
end
