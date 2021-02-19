class RenameItemIdToObjectId < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_items, :item_id, :object_id
  end
end
