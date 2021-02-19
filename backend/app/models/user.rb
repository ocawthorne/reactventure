class User < ApplicationRecord
   has_many :user_items
   has_many :objects, through: :useritems
   has_secure_password
end
