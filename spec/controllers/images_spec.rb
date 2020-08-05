require 'rails_helper'

RSpec.describe "Images", type: :request do
  let(:d1) {Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")}
  let(:d2) {Destination.create(place: 'Mexico2', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")}
  let(:d3) {Destination.create(place: 'Mexico3', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")}
  let(:im1) {Image.create(city_description: "Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.", destination_id: 1, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
  let(:user) { User.create(name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123', admin: true) }
  describe '#Images' do
    it 'creates an image' do 
      d1
      post '/api/v1/images', params: {image: {city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id}}
      
      expect(response).to be_successful
    end

    it 'stores the new image' do 
      d1
      post '/api/v1/images', params: {image: {city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id}}
      
      expect(response.body).to include('new place')
    end

    it 'deletes an image' do 
      d1
      user
      post '/api/v1/sessions', params: {user: {email: 'test@test.com', password: '123'}}
      post '/api/v1/images', params: {image: {city: 'new place', city_description: 'some awesome description', image_url: 'image url', destination_id: d1.id}}
      
      delete '/api/v1/images/1'
      expect(response).to be_successful
    end
  end
end