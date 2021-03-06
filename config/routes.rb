Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :suggestions, only: [:index]
    resources :locations, only: [:index, :create, :show, :update, :destroy]
  end
end
