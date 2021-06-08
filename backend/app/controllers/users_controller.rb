class UsersController < ApplicationController

  def create
    render json: { code: params[:code] }
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
    binding.irb
  end

end
