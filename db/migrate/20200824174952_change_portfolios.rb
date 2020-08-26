class ChangePortfolios < ActiveRecord::Migration[5.2]
  def change
    rename_column :portfolios, :owned_amt, :shares_owned
  end
end
