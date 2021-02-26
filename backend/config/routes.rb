Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/api/v1/users", to: "api/v1/users#create"
  get "api/v1/logged_in", to: "api/v1/sessions#logged_in"

  namespace :api do
    namespace :v1 do
      resources :entities
      resources :users
      resources :entity_interactions

      resources :sessions, only: [:create, :logout, :current_user]
      resources :users, only: [:create]
    end
  end
end
