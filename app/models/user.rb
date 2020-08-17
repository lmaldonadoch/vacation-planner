class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :destinations
  has_many :vacation_dates

  validates :name, :email, presence: true
  validates_uniqueness_of :email
end
