class AddBuyingPowerToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :buying_power, :decimal, precision: 19, scale: 4
  end
end
