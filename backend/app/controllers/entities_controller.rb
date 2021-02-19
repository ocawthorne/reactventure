class EntitiesController < ApplicationController
   def index
      Entity.all
      
   end
end
