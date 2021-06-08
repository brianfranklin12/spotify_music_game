class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.integer :spotify_id
      t.string :avatar
      t.string :points

      t.timestamps
    end
  end
end
