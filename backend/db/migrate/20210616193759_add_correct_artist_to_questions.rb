class AddCorrectArtistToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :correct_artist, :string
  end
end
