class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.string :name
      t.string :artist
      t.string :uri

      t.timestamps
    end
  end
end
