Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "api/v1/login", to: "api/v1/sessions#create"
  get "api/v1/current_user", to: "api/v1/sessions#current_user"
  post "/api/v1/users", to: "api/v1/users#create"

  namespace :api do
    namespace :v1 do
      resources :entities
      resources :users
      resources :entity_interactions

      resources :sessions, only: [:create]
      resources :users, only: [:create]
    end
  end
end
