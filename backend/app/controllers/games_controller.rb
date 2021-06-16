class GamesController < ApplicationController

  def create
    header = {
      Authorization: "Bearer #{params[:accessToken]}"
    }

    playlist_response = RestClient.get("https://api.spotify.com/v1/playlists/#{params[:id]}/tracks", header)
    playlist_params = JSON.parse(playlist_response.body)

    game = Game.create(user_id: current_user.id, playlist_uri: params[:id], points: 0)

    tracks = playlist_params["items"].each do |track|
      new_track = Track.create(game_id: game.id, name: track["track"]["name"], artist: track["track"]["artists"][0]["name"], uri: track["track"]["uri"])
    end

    questions = game.tracks.each do |track|
      new_question = Question.create(game_id: game.id, track_uri: track.uri, correct_artist: track.artist)
      wrong_artists = new_question.three_wrong_answers
      new_question.a1 = wrong_artists[0]
      new_question.a2 = wrong_artists[1]
      new_question.a3 = wrong_artists[2]
      new_question.save
    end

    if game
      render json: { game: game, questions: game.questions }
    else
      render json: { error: game.errors.full_messages }
    end
    
  end

end