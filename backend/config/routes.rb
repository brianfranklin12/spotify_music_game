Rails.application.routes.draw do
  # get 'auth/spotify/callback', to: 'users#create'
  post '/login', to: 'tokens#create'
  post '/refresh', to: 'tokens#refresh'
  post '/users', to: 'users#create'
  get '/profile', to: 'users#profile'
  post '/games', to: 'games#create'
end
