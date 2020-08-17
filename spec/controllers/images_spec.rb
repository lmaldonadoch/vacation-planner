require 'rails_helper'
# rubocop:disable Layout/LineLength
RSpec.describe 'Images', type: :request do
  let(:d1) { create(:destination) }
  let(:im1) { create(:image) }
  let(:u) { create(:admin) }

  describe '#Images' do
    it 'creates an image' do
      u
      post '/api/v1/sessions', params: { user: { email: 'admin@vacationplanner.com', password: '123456' } }

      post '/api/v1/images', params: { image: { city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id } }

      expect(response).to be_successful
    end

    it 'stores the new image' do
      u
      post '/api/v1/sessions', params: { user: { email: 'admin@vacationplanner.com', password: '123456' } }

      post '/api/v1/images', params: { image: { city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id } }

      expect(response.body).to include('new place')
    end

    it 'deletes an image' do
      u
      post '/api/v1/sessions', params: { user: { email: 'admin@vacationplanner.com', password: '123456' } }

      post '/api/v1/images', params: { image: { city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id } }

      delete "/api/v1/images/#{Image.last.id}"
      expect(response).to be_successful
    end
  end
  # rubocop:enable Layout/LineLength
end
