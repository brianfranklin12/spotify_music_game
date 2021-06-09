class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :refresh]

  def profile
    binding.irb
    user = current_user
    render json: user
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

    # user_response = RestClient.get("https://api.spotify.com/v1/me", header)
    # user_params = JSON.parse(user_response.body)
    
    # @user = User.new(spotify_id: user_params["id"], name: user_params["display_name"], avatar: user_params["images"][0]["url"], access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"])
    # if @user.save
    #   @token = encode_token(user_id: @user_id)
    #   render json: { user: @user, jwt: @token }, status: :created
    # else
    #   render json: { error: @user.errors.full_messages }
    # end
    
  end

end
