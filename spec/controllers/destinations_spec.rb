# rubocop:disable Layout/LineLength
require 'rails_helper'

RSpec.describe 'Destinations', type: :request do
  let(:d1) { Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.") }
  let(:d2) { Destination.create(place: 'Mexico2', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.") }
  describe '#Destinations' do
    it 'gets destinations' do
      get '/api/v1/destinations'
      expect(response).to be_successful
    end

    it 'lists destinations' do
      d1
      d2
      get '/api/v1/destinations'
      expect(response.body).to include('Mexico')
      expect(response.body).to include('Mexico2')
    end

    it 'creates a destination' do
      post '/api/v1/destinations', params: { destination: { place: 'new place', country_description: 'some awesome description' } }

      expect(response).to be_successful
    end

    it 'stores the new destination' do
      post '/api/v1/destinations', params: { destination: { place: 'new place', country_description: 'some awesome description' } }

      expect(response.body).to include('new place')
    end
  end
end
# rubocop:enable Layout/LineLength
