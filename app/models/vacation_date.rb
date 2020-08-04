class VacationDate < ApplicationRecord
  belongs_to :user
  belongs_to :destination
  belongs_to :image

  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :city, presence: true
  validates :country, presence: true
end
