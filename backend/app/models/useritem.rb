class UserItem < ApplicationRecord
   belongs_to :user
   belongs_to :object
end
