class RenameInventoriesToUserItems < ActiveRecord::Migration[6.1]
  def change
    rename_table :inventories, :user_items
  end
end
