class Api::V1::UseritemsController < ApplicationController
   def index
      useritems = UserItem.all
      render json: useritems
   end
end
