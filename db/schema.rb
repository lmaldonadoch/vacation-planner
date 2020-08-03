# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_03_014144) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string "place"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "country_description"
  end

  create_table "destinations_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "destination_id", null: false
    t.index ["user_id", "destination_id"], name: "index_destinations_users_on_user_id_and_destination_id"
  end

  create_table "images", force: :cascade do |t|
    t.bigint "destination_id", null: false
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "city"
    t.string "city_description"
    t.index ["destination_id"], name: "index_images_on_destination_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false
  end

  create_table "vacation_dates", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "destination_id"
    t.index ["destination_id"], name: "index_vacation_dates_on_destination_id"
    t.index ["user_id"], name: "index_vacation_dates_on_user_id"
  end

  add_foreign_key "images", "destinations"
  add_foreign_key "vacation_dates", "users"
end
