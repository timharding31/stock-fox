# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_25_171840) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "holdings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.decimal "amt", precision: 19, scale: 4, null: false
    t.string "stock_symbol"
    t.index ["stock_symbol"], name: "index_holdings_on_stock_symbol"
    t.index ["user_id"], name: "index_holdings_on_user_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "exchange", null: false
    t.string "symbol", null: false
    t.string "name", null: false
    t.decimal "price", precision: 19, scale: 4, null: false
    t.string "marketcap"
    t.string "ipo"
    t.string "sector"
    t.string "industry"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["symbol"], name: "index_stocks_on_symbol", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "buying_power", precision: 19, scale: 4
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "watches", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "stock_symbol"
    t.index ["stock_symbol"], name: "index_watches_on_stock_symbol"
    t.index ["user_id"], name: "index_watches_on_user_id"
  end

end
