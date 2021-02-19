class CreateEntitiesGet < ActiveRecord::Migration[6.1]
  def change
    create_table :entities_gets do |t|
      t.string :entity_name
      t.timestamps
    end
  end
end
