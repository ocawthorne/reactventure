class AddColumnsForAvailability < ActiveRecord::Migration[6.1]
  def change
    add_column :entities, :available, :boolean
    add_column :entity_interactions, :available, :boolean
    remove_column :user_items, :discovered
    remove_column :user_items, :in_inventory
    rename_table :user_items, :inventories
  end
end
