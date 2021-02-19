class CreateEntityInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :entity_interactions do |t|
      t.string :entity_1
      t.string :entity_2
      t.text :result_text
      t.string :action
      t.timestamps
    end
  end
end
