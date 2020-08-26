class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.decimal :owned_amt, precision: 19, scale: 4, null: false
    end
    add_reference :portfolios, :ownable, polymorphic: true, index: true
  end
end
