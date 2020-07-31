class Destination < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :vacation_dates
end
