require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe '#Sessions' do
    let(:user) { User.create(name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123') }
    it 'gets the user' do
      get '/api/v1/logged_in'
      expect(response).to be_successful
    end

    it 'creates a session' do
      user
      post '/api/v1/sessions', params: {user: {email: 'test@test.com', password: '123'}}
      expect(response.body).to include('test')
    end

    it 'loggs out a user' do 
      user
      post '/api/v1/sessions', params: {user: {email: 'test@test.com', password: '123'}}
      
      delete '/api/v1/logout'
      expect(response).to be_successful
    end
  end
end