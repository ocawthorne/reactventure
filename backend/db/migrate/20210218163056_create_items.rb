class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.text :description_broken
      t.text :feel
      t.timestamps
    end
  end
end
