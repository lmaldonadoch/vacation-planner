require 'rails_helper'

RSpec.describe VacationDate, type: :model do
  describe '#VacationDates' do
    let(:vacation_date) { create(:vacation_date) }

    it 'doesnt take vacation date without a start date' do
      vacation_date.start_date = nil
      vacation_date.valid?
      expect(vacation_date.errors[:start_date]).to include("can't be blank")

      vacation_date.start_date = Date.parse('31-12-2020')
      vacation_date.valid?
      expect(vacation_date.errors[:start_date]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without an end date' do
      vacation_date.end_date = nil
      vacation_date.valid?
      expect(vacation_date.errors[:end_date]).to include("can't be blank")

      vacation_date.end_date = Date.parse('31-12-2020')
      vacation_date.valid?
      expect(vacation_date.errors[:end_date]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without a city' do
      vacation_date.city = nil
      vacation_date.valid?
      expect(vacation_date.errors[:city]).to include("can't be blank")

      vacation_date.city = 'test'
      vacation_date.valid?
      expect(vacation_date.errors[:city]).to_not include("can't be blank")
    end

    it 'doesnt take vacation date without a city' do
      vacation_date.country = nil
      vacation_date.valid?
      expect(vacation_date.errors[:country]).to include("can't be blank")

      vacation_date.country = 'test'
      vacation_date.valid?
      expect(vacation_date.errors[:country]).to_not include("can't be blank")
    end
  end
end
