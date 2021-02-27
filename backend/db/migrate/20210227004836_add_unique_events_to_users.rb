class AddUniqueEventsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :unique_events, :text
  end
end
