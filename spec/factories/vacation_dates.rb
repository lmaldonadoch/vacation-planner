FactoryBot.define do
  factory :vacation_date do
    start_date { Faker::Date.between(from: '2020-09-01', to: '2020-09-30') }
    end_date { Faker::Date.between(from: '2020-10-01', to: '2020-10-30') }
    city { Faker::Name.name }
    country { Faker::Name.name }
    association :destination
    association :user
    association :image
  end
end
