class AddObtainableColumnToObjects < ActiveRecord::Migration[6.1]
  def change
    add_column :objects, :obtainable, :boolean
  end
end
