class Api::V1::EntityInteractionsController < ApplicationController
   def index
      entityints = EntityInteraction.all
      render json: entityints, except: [:created_at, :updated_at]
   end
end
