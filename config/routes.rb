Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :watchlists, only: [:index]
    resources :portfolios, only: [:index]
    resources :stocks, param: :symbol, only: [:show, :update, :index] do 
      resources :watchlists, only: [:create]
      resources :portfolios, only: [:create]
    end
    # patch '/portfolios/', to: 'portfolios#update'
    delete '/stocks/:stock_symbol/watchlists', to: 'watchlists#destroy'
    delete '/stocks/:stock_symbol/portfolios', to: 'portfolios#destroy'

  end

end
