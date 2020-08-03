class VacationDate < ApplicationRecord
  belongs_to :user
  belongs_to :destination
  belongs_to :image
end
