class Game < ApplicationRecord
  belongs_to :user
  has_many :tracks
  has_many :questions

end
