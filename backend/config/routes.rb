Rails.application.routes.draw do
  # get 'auth/spotify/callback', to: 'users#create'
  post '/login', to: 'tokens#create'
  post '/refresh', to: 'tokens#refresh'
  get '/profile', to: 'users#profile'
end
