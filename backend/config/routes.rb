Rails.application.routes.draw do
  # get 'auth/spotify/callback', to: 'users#create'
  post '/login', to: 'users#create'
  post '/refresh', to: 'users#refresh'
  get '/profile', to: 'users#profile'
end
