FactoryBot.define do
  factory :user do
    name {'test'}
    email {'test@test.com'}
    password {'123'}
    password_confirmation {'123'}
    admin {false}
  end

  factory :random_user, class: User do
    name { Faker::Name.name }
    email { Faker::Internet.safe_email }
    password {'123'}
    password_confirmation {'123'}
    admin {false}
  end

  factory :admin, class: User do
    name { Faker::Name.name }
    email { Faker::Internet.safe_email }
    password {'123'}
    password_confirmation {'123'}
    admin {true}
  end
end