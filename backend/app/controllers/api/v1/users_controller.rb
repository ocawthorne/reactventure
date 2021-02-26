class Api::V1::UsersController < ApplicationController
   def index
      users = User.all
      render json: users
   end

   def show
      user = User.find(params[:id])
      render json: user
   end

   def create
      user = User.new(user_params)
      render json: (user.save ? { user: user, logged_in: true } : { user: {}, logged_in: false, error: "There was a problem with your user creation." })
   end

   def update
      user = User.find(params[:id])
      user.update(
         history: params[:history],
         inventory: params[:inventory],
         known_objects: params[:known_objects],
         broken_objects: params[:broken_objects],
      )
      render json: (user.save ? { user: user } : { error: "There was a problem with your save." })
   end

   private

   def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
   end
   
end
