class Api::V1::SessionsController < ApplicationController
   def create
      user = User.find_by(username: params[:session][:username])
      session[:user_id] = user.id
      if user && user.authenticate(params[:session][:password])
            render json: user
      else 
         render json: {
            error: "Invalid Credentials"
         }
      end 
   end 

   def current_user
      if logged_in?
         render json: current_user 
      else
         render json: {
            error: "Not logged in"
         }
      end
   end
end
