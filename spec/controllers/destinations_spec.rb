require 'rails_helper'

RSpec.describe "Destinations", type: :request do
  let (:d1) {Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")}
  let (:d2) {Destination.create(place: 'Mexico2', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")}
  let (:im1) {Image.create(city_description: "Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.", destination_id: 1, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
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
      post '/api/v1/destinations', params: {destination: {place: 'new place', country_description: 'some awesome description'}}
      
      expect(response).to be_successful
    end

    it 'stores the new destination' do 
      post '/api/v1/destinations', params: {destination: {place: 'new place', country_description: 'some awesome description'}}
      
      expect(response.body).to include('new place')
    end
  end
end