class VacationDate < ApplicationRecord
  belongs_to :user
  belongs_to :destination
  belongs_to :image

  validates :start_date, :end_date, :city, :country, presence: true
end
