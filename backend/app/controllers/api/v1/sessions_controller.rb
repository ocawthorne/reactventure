class Api::V1::SessionsController < ApplicationController
   def create
      user = User.find_by(username: params[:user][:username])
      session[:user_id] = user.id
      if user && user.authenticate(params[:user][:password])
            render json: {user: user, logged_in: true}
      else 
         render json: {
            error: "Incorrect username or password."
         }
      end 
   end 

   def logout
      reset_session
      render json: { user: {}, logged_in: false}
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
