class UsersController < ApplicationController

  def create
    body = {
      grant_type: "authorization_code",
      code: params[:code],
      redirect_uri: ENV['REDIRECT_URI'],
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET']
    }

    auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
    auth_params = JSON.parse(auth_response.body)

    header = {
      Authorization: "Bearer #{auth_params["access_token"]}"
    }

    user_response = RestClient.get("https://api.spotify.com/v1/me", header)
    user_params = JSON.parse(user_response.body)
    
    @user = User.new(spotify_id: user_params["id"], avatar: user_params["images"][0]["url"], access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"])
    render json: @user
    # redirect_to "http://localhost:3000/"
  end

end
