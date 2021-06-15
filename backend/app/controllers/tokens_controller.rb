class TokensController < ApplicationController
  skip_before_action :authorized, only: [:create, :refresh]
  
  def create
    body = {
      grant_type: "authorization_code",
      code: params[:_json],
      redirect_uri: ENV['REDIRECT_URI'],
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET']
    }

    auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
    auth_params = JSON.parse(auth_response.body)

    render json: { access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"], expires_in: auth_params["expires_in"] }

  end
  
  def refresh

    body = {
      grant_type: "refresh_token",
      refresh_token: params[:refreshToken],
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET']
    }

    auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
    auth_params = JSON.parse(auth_response.body)

    render json: auth_params

  end

end