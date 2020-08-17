FactoryBot.define do
  factory :destination do
    place { Faker::Name.name }
    country_description { Faker::ChuckNorris.fact }
  end
end
