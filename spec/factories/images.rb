FactoryBot.define do
  factory :image do
    image_url { 'https://images.unsplash.com/photo' }
    city { Faker::Name.name }
    city_description { Faker::ChuckNorris.fact }
    association :destination
  end
end