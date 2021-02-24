class User < ApplicationRecord
   has_secure_password
   serialize :inventory, Array
   serialize :history, Array
end
