# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "user", hero: "John", password: "password")

Object.create(
   name: "crowbar",
   description: "Just a rusty old crowbar.",
   description_broken: "The crowbar snapped clean in two. Useless now.",
   feel: "It's coarse and cold to the touch.",
   obtainable: true
)
