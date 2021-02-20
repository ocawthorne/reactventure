class Api::V1::EntitiesController < ApplicationController
   def index
      entity = Entity.all
      render json: entity
   end
end
