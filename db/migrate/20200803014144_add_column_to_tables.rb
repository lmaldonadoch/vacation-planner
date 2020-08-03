class AddColumnToTables < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :city_description, :string
    add_column :destinations, :country_description, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
