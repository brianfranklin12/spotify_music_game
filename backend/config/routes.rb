Rails.application.routes.draw do
  get 'auth/spotify/callback', to: 'users#create'
end
