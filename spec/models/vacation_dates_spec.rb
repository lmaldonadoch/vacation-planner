require 'rails_helper'

RSpec.describe VacationDate, type: :model do
  describe '#VacationDates' do
    let(:d1) { Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.") }
    let(:im1) { Image.create(city_description: 'Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.', destination_id: d1.id, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') }
    let(:user) { User.create(name: 'test', email: 'test@test.com', password: '123', password_confirmation: '123', admin: true) }  
    let(:vacation_date) { VacationDate.create(user_id: user.id, destination_id: d1.id, image_id: im1.id, start_date: '10/10/21', end_date: '11/10/21', country: 'Mexico', city: 'Tulum' ) }

    it 'doesnt take vacation date without a start date' do
      d1
      im1
      user
      vacation_date
      vacation_date.start_date = nil
      vacation_date.valid?
      expect(vacation_date.errors[:start_date]).to include("can't be blank")

      vacation_date.start_date = Date.parse('31-12-2020')
      vacation_date.valid?
      expect(vacation_date.errors[:start_date]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without an end date' do
      d1
      im1
      user
      vacation_date
      vacation_date.end_date = nil
      vacation_date.valid?
      expect(vacation_date.errors[:end_date]).to include("can't be blank")

      vacation_date.end_date = Date.parse('31-12-2020')
      vacation_date.valid?
      expect(vacation_date.errors[:end_date]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without a city' do
      d1
      im1
      user
      vacation_date
      vacation_date.city = nil
      vacation_date.valid?
      expect(vacation_date.errors[:city]).to include("can't be blank")

      vacation_date.city = 'test'
      vacation_date.valid?
      expect(vacation_date.errors[:city]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without a city' do
      d1
      im1
      user
      vacation_date
      vacation_date.country = nil
      vacation_date.valid?
      expect(vacation_date.errors[:country]).to include("can't be blank")

      vacation_date.country = 'test'
      vacation_date.valid?
      expect(vacation_date.errors[:country]).to_not include("can't be blank")
    end
  end
end
