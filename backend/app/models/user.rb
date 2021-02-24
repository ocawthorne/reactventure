class User < ApplicationRecord
   has_secure_password
   validates :username, presence: true, uniqueness: true

   serialize :inventory, Array
   serialize :history, Array
end
