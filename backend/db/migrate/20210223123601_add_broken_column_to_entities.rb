class AddBrokenColumnToEntities < ActiveRecord::Migration[6.1]
  def change
    add_column :entities, :broken, :boolean
  end
end
