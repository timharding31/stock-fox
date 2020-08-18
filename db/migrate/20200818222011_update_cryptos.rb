class UpdateCryptos < ActiveRecord::Migration[5.2]
  def change
    remove_column :cryptos, :industry
  end
end
