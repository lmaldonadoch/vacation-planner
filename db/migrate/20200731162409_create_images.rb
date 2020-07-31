class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.references :destination, null: false, foreign_key: true
      t.string :image_url

      t.timestamps
    end
  end
end
