# rubocop:disable Layout/LineLength
require 'rails_helper'

RSpec.describe 'Destinations', type: :request do
  let(:d1) { create(:destination, place: 'Mexico') }
  let(:d2) { create(:destination, place: 'Mexico2') }
  let(:u) { create(:admin) }
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
      u
      post '/api/v1/sessions', params: { user: { email: 'admin@vacationplanner.com', password: '123456' } }

      post '/api/v1/destinations', params: { destination: { place: 'new place', country_description: 'some awesome description' } }

      expect(response).to be_successful
    end

    it 'stores the new destination' do
      u
      post '/api/v1/sessions', params: { user: { email: 'admin@vacationplanner.com', password: '123456' } }

      post '/api/v1/destinations', params: { destination: { place: 'new place', country_description: 'some awesome description' } }

      expect(response.body).to include('new place')
    end
  end
end
# rubocop:enable Layout/LineLength
