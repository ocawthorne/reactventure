class Item < ApplicationRecord
   has_many :user_items
   has_many :users, through: :useritems
end
