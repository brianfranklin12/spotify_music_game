class User < ApplicationRecord
  validates_uniqueness_of :spotify_id
end
