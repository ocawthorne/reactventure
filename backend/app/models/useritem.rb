class UserItem < ApplicationRecord
   belongs_to :user
   belongs_to :entity
end
