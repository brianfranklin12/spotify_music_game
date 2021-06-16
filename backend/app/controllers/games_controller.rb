class GamesController < ApplicationController

  def create
    header = {
      Authorization: "Bearer #{params[:accessToken]}"
    }

    playlist_response = RestClient.get("https://api.spotify.com/v1/playlists/#{params[:id]}/tracks", header)
    playlist_params = JSON.parse(playlist_response.body)

    game = Game.new(user_id: current_user.id, playlist_uri: params[:id], points: 0)

    if game.save
      render json: game
    else
      render json: { error: game.errors.full_messages }
    end
    
  end
end