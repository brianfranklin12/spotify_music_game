class ChangeIdToBeAStringInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :spotify_id, :string
  end
end
