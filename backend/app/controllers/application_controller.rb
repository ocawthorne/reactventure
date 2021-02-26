class ApplicationController < ActionController::API
   # protect_from_forgery with: :exception
   # skip_before_action :verify_authenticity_token
   # helper_method :logged_in, :current_user

   private

   def current_user
      current_user ||= User.find(id: session[:user_id]) if session[:user_id]
   end 

   def logged_in?
      !!current_user
   end

end
