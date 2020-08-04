class AddCountryAndCityToVacationDates < ActiveRecord::Migration[6.0]
  def change
    add_column :vacation_dates, :city, :string
    add_column :vacation_dates, :country, :string
  end
end
