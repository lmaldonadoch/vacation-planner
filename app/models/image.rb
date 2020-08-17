class Image < ApplicationRecord
  belongs_to :destination
  has_many :vacation_dates

  validates :image_url, :city, :city_description, presence: true
end
