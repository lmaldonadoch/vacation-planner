class CreateJoinTableUserDestination < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :destinations do |t|
      t.index [:user_id, :destination_id]
      # t.index [:destination_id, :user_id]
    end
  end
end
