class RenameObjectsToEntities < ActiveRecord::Migration[6.1]
  def change
    rename_table :objects, :entities
  end
end
