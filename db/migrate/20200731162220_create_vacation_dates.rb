class CreateVacationDates < ActiveRecord::Migration[6.0]
  def change
    create_table :vacation_dates do |t|
      t.references :user, null: false, foreign_key: true
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
