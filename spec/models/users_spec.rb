require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#Registration' do
    let(:user) { create(:user) }
    it 'doesnt take user without the name' do
      user.name = nil
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")

      user.name = 'test'
      user.valid?
      expect(user.errors[:name]).to_not include("can't be blank")
    end

    it 'doesnt take user without the email' do
      user.email = nil
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")

      user.email = 'test@test.com'
      user.valid?
      expect(user.errors[:email]).to_not include("can't be blank")
    end

    it 'doesnt take user with duplicated email' do
      user
      user2 = build(:user)
      expect(user2).to_not be_valid
    end

    it 'doesnt take user without the password' do
      user.password = nil
      user.valid?
      expect(user.errors[:password]).to include("can't be blank")

      user.password = '123'
      user.valid?
      expect(user.errors[:password]).to_not include("can't be blank")
    end
  end
end
