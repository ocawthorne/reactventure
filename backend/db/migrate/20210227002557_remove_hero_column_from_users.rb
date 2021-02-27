class RemoveHeroColumnFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :hero
  end
end
