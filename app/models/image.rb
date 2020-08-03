class Image < ApplicationRecord
  belongs_to :destination
  has_many :vacation_dates
end
