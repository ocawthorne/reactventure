class Api::V1::EntitiesController < ApplicationController
   def index
      entity = Entity.all
      render json: entity, except: [:created_at, :updated_at]
   end
end
