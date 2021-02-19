class RenameObjectsIdToEntityId < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_items, :object_id, :entity_id
  end
end
