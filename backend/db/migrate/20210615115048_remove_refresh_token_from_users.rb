class RemoveRefreshTokenFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :refresh_token, :string
  end
end
