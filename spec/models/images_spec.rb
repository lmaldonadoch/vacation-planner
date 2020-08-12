require 'rails_helper'
# rubocop:disable Layout/LineLength

RSpec.describe Image, type: :model do
  describe '#Images' do
    let(:image) { Image.create(city_description: 'Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.', destination_id: 1, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') }
    it 'doesnt take an image without URL' do
      image
      image.image_url = nil
      image.valid?
      expect(image.errors[:image_url]).to include("can't be blank")

      image.image_url = 'test'
      image.valid?
      expect(image.errors[:image_url]).to_not include("can't be blank")
    end

    it 'doesnt take an image without city' do
      image
      image.city = nil
      image.valid?
      expect(image.errors[:city]).to include("can't be blank")

      image.city = 'test'
      image.valid?
      expect(image.errors[:city]).to_not include("can't be blank")
    end

    it 'doesnt take an image without city description' do
      image
      image.city_description = nil
      image.valid?
      expect(image.errors[:city_description]).to include("can't be blank")

      image.city_description = 'test'
      image.valid?
      expect(image.errors[:city_description]).to_not include("can't be blank")
    end
  end
  # rubocop:enable Layout/LineLength
end
