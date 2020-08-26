class DropCryptos < ActiveRecord::Migration[5.2]
  def change
    drop_table :cryptos
  end
end
