require 'rails_helper'

RSpec.describe Destination, type: :model do
  describe '#Destinations' do
    let(:destination) { Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.") }
    it 'doesnt take destiation without the place' do
      destination
      destination.place = nil
      destination.valid?
      expect(destination.errors[:place]).to include("can't be blank")

      destination.place = 'test'
      destination.valid?
      expect(destination.errors[:place]).to_not include("can't be blank")
    end

    it 'doesnt take destiation without the country description' do
      destination
      destination.country_description = nil
      destination.valid?
      expect(destination.errors[:country_description]).to include("can't be blank")

      destination.country_description = 'test'
      destination.valid?
      expect(destination.errors[:country_description]).to_not include("can't be blank")
    end
  end
end
