Rails.application.routes.draw do
  # get 'auth/spotify/callback', to: 'users#create'
  post '/login', to: 'users#create'
  get '/profile', to: 'users#profile'
end
