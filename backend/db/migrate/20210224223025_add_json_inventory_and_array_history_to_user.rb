class AddJsonInventoryAndArrayHistoryToUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :heroname
    add_column :users, :inventory, :text
    add_column :users, :history, :text, limit: 2.megabytes-1
  end
end
