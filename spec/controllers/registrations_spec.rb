require 'rails_helper'
# rubocop:disable Layout/LineLength

RSpec.describe 'Registrations', type: :request do
  describe '#Registrations' do
    it 'creates a user' do
      post '/api/v1/registrations', params: { user: { name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123' } }
      expect(response.body).to include('test')
    end

    it 'does not creates a user with a duplicated email' do
      post '/api/v1/registrations', params: { user: { name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123' } }

      expect { post '/api/v1/registrations', params: { user: { name: 'test2', email: 'test@test.com', password: '123', password_confirmation: '123' } } }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end
  # rubocop:enable Layout/LineLength
end
