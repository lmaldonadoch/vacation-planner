Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      resources :destinations
      resources :images, only: [:create, :destroy]
      delete :logout, to: 'sessions#logout'
      get :logged_in, to: 'sessions#logged_in'
    end
  end

  get '*path', to: 'pages#index', via: :all
end
