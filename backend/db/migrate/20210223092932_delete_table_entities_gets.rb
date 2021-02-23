class DeleteTableEntitiesGets < ActiveRecord::Migration[6.1]
  def change
    drop_table :entities_gets
  end
end
