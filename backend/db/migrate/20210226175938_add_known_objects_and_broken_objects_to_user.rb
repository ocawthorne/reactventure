class AddKnownObjectsAndBrokenObjectsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :known_objects, :text
    add_column :users, :broken_objects, :text
  end
end
