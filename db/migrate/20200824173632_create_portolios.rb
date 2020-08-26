class CreatePortolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portolios do |t|

      t.timestamps
    end
  end
end
