class Api::V1::UsersController < ApplicationController
   def index
      users = User.all
      render json: users
   end

   def show
      user = User.find_by_id(id: params[:id])
      render json: user
   end

   def create
      user = User.new(user_params)
      render json: (user.save ? { user: user, logged_in: true } : { user: {}, logged_in: false, error: "There was a problem with your user creation." })
   end

   private

   def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
   end
   
end
