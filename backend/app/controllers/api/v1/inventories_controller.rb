class Api::V1::InventoriesController < ApplicationController
   def index
      inventory = Inventory.all
      render json: inventory
   end
end
