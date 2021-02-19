class User < ApplicationRecord
   has_many :user_items
   has_many :entities, through: :useritems
   has_secure_password
end
