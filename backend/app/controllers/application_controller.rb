class ApplicationController < ActionController::API
   skip_before_action :verify_authenticity_token

   private

   def current_user
      User.find_by(id: session[:user_id])
   end 

   def logged_in?
      !!current_user
   end

end
