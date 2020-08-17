require 'rails_helper'

RSpec.describe Image, type: :model do
  describe '#Images' do
    let(:image) { build(:image) }
    it 'doesnt take an image without URL' do
      image.image_url = nil
      image.valid?
      expect(image.errors[:image_url]).to include("can't be blank")

      image.image_url = 'test'
      image.valid?
      expect(image.errors[:image_url]).to_not include("can't be blank")
    end

    it 'doesnt take an image without city' do
      image.city = nil
      image.valid?
      expect(image.errors[:city]).to include("can't be blank")

      image.city = 'test'
      image.valid?
      expect(image.errors[:city]).to_not include("can't be blank")
    end

    it 'doesnt take an image without city description' do
      image.city_description = nil
      image.valid?
      expect(image.errors[:city_description]).to include("can't be blank")

      image.city_description = 'test'
      image.valid?
      expect(image.errors[:city_description]).to_not include("can't be blank")
    end
  end
end
