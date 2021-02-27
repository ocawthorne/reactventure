class User < ApplicationRecord
   has_secure_password
   validates :username, presence: true, uniqueness: true

   serialize :inventory, Array
   serialize :history, Array
   serialize :known_objects, Array
   serialize :broken_objects, Array
   serialize :unique_events, Hash
end
