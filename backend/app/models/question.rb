class Question < ApplicationRecord
  belongs_to :game

  def artist_array
    self.game.tracks.map do |track|
      track.artist
    end
  end

  def wrong_only
    wrong_only = artist_array.select { |artist| artist != self.correct_artist }
  end

  def unique_wrong_answers
    wrong_only.uniq!
  end

  def three_wrong_answers
   wrong_only.sample(3)
  end

end
