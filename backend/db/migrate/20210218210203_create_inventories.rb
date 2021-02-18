class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.integer :user_id
      t.integer :item_id
      t.boolean :discovered
      t.boolean :in_inventory
      t.boolean :broken
      t.timestamps
    end
  end
end
