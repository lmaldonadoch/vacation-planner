require 'rails_helper'

RSpec.describe 'Images', type: :request do
  # rubocop:disable Layout/LineLength

  let(:d1) { Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.") }
  let(:im1) { Image.create(city_description: 'Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.', destination_id: d1.id, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') }
  let(:user) { User.create(name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123', admin: true) }
  describe '#Images' do
    it 'Schedules new vacation date' do
      d1
      im1
      user
      post '/api/v1/vacation_dates', params: { date: { user_id: user.id, destination_id: d1.id, image_id: im1.id, start_date: '10/10/21', end_date: '11/10/21', country: 'Mexico', city: 'Tulum' } }

      expect(response).to be_successful
    end

    it 'Stores new vacation date' do
      d1
      im1
      user
      post '/api/v1/vacation_dates', params: { date: { user_id: user.id, destination_id: d1.id, image_id: im1.id, start_date: '10/10/21', end_date: '11/10/21', country: 'Mexico', city: 'Tulum' } }

      expect(response.body).to include('created')
    end

    it 'deletes a scheduled vacation' do
      d1
      im1
      user
      post '/api/v1/vacation_dates', params: { date: { user_id: user.id, destination_id: d1.id, image_id: im1.id, start_date: '10/10/21', end_date: '11/10/21', country: 'Mexico', city: 'Tulum' } }
      vacation = VacationDate.last
      delete "/api/v1/vacation_dates/#{vacation.id}"
      expect(response).to be_successful
    end
  end
end
# rubocop:enable Layout/LineLength
