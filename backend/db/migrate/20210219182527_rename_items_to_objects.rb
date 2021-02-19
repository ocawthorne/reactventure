class RenameItemsToObjects < ActiveRecord::Migration[6.1]
  def change
    rename_table :items, :objects
  end
end
