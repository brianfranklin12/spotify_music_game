class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.string :track_uri
      t.string :a1
      t.string :a2
      t.string :a3
      t.string :a4
      t.integer :correct

      t.timestamps
    end
  end
end
