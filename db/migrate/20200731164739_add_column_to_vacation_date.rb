class AddColumnToVacationDate < ActiveRecord::Migration[6.0]
  def change
    add_reference :vacation_dates, :destination, index: true
  end
end
