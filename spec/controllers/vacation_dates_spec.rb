require 'rails_helper'

RSpec.describe 'Images', type: :request do
  # rubocop:disable Layout/LineLength

  let(:d1) { create(:destination) }
  let(:im1) { create(:image) }
  let(:user) { create(:user) }
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
