FactoryBot.define do
  factory :user do
    name { 'test' }
    email { 'test@test.com' }
    password { '123' }
    password_confirmation { '123' }
    admin { false }
  end

  factory :admin, class: User do
    name { 'Admin' }
    email { 'admin@vacationplanner.com' }
    password { '123456' }
    password_confirmation { '123456' }
    admin { true }
  end
end
