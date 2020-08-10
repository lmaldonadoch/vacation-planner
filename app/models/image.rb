class Image < ApplicationRecord
  belongs_to :destination
  has_many :vacation_dates

  validates :image_url, presence: true, uniqueness: { case_sensitive: false }
  validates :city, presence: true, uniqueness: { case_sensitive: false }
  validates :city_description, presence: true
end
