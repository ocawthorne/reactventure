# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_23_123601) do

  create_table "entities", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "description_broken"
    t.text "feel"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "obtainable"
    t.boolean "available"
    t.boolean "broken"
  end

  create_table "entity_interactions", force: :cascade do |t|
    t.string "entity_1"
    t.string "entity_2"
    t.text "result_text"
    t.string "action"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "available"
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "user_id"
    t.integer "entity_id"
    t.boolean "broken"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.string "hero"
    t.string "password_digest"
  end

end
