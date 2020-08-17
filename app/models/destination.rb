class Destination < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :vacation_dates
  has_many :images

  validates :place, :country_description, presence: true
end
