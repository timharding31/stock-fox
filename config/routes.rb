Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stocks, param: :symbol, only: [:show, :update]
    resources :cryptos, param: :symbol, only: [:show, :update]
    resources :watchlists, only: [:index]
    resources :stocks, :cryptos, param: :symbol, only: [] do 
      resources :watchlists, only: [:create]
    end
    delete '/stocks/:stock_symbol/watchlists', to: 'watchlists#destroy'
    delete '/cryptos/:crypto_symbol/watchlists', to: 'watchlists#destroy'

  end

end
