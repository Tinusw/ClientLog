# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

clients = Client.create(
  [
    {
      first_name: "Steve",
      last_name: "Jones",
      phone: "0123456789",
      email: "steve@jones.com",
      address: "125 Blue Street",
      city: "Ohio",
      country: "United States of America"
    },
    {
      first_name: "Peter",
      last_name: "Jones",
      phone: "0123456789",
      email: "pete@jones.com",
      address: "125 Blue Street",
      city: "Cincinatti",
      country: "United States of America"
    },
    {
      first_name: "Nina",
      last_name: "Jones",
      phone: "0123456789",
      email: "Nina@jones.com",
      address: "125 Blue Street",
      city: "Ohio",
      country: "United States of America"
    },
    {
      first_name: "Paul",
      last_name: "Jones",
      phone: "0123456789",
      email: "Paul@jones.com",
      address: "125 Blue Street",
      city: "Ohio",
      country: "United States of America"
    }
  ]
)
