class AddColumnToTable < ActiveRecord::Migration[6.0]
  def change
    add_reference :vacation_dates, :image, index:true
  end
end
