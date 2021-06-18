Rails.application.routes.draw do
  # get 'auth/spotify/callback', to: 'users#create'
  post '/login', to: 'tokens#create'
  post '/refresh', to: 'tokens#refresh'
  resources :users, only: [:create, :patch]
  get '/profile', to: 'users#profile'
  post '/games', to: 'games#create'
end
