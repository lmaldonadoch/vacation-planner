class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :destinations
  has_many :vacation_dates

  validates_presence_of :email
  validates_uniqueness_of :email
  validates :name, presence: true
end
