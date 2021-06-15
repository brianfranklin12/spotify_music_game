class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :refresh]

  def create
    header = {
      Authorization: "Bearer #{params[:accessToken]}"
    }

    user_response = RestClient.get('https://api.spotify.com/v1/me', header)
    user_params = JSON.parse(user_response.body)

    user = User.find_or_create_by(spotify_id: user_params["id"]) do |u|
      u.name = user_params["display_name"]
      u.avatar = user_params["images"][0]["url"]
      u.points = 0
    end

    if user
      render json: user
    else
      render json: { error: user.errors.full_messages }
    end

  end

  

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
