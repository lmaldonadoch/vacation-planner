# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: 'Admin', email: 'admin@vacationplanner.com', password: '123456', password_confirmation: '123456', admin: true)

u2 = User.create(name: 'Luis', email: 'luis@vacationplanner.com', password: '123456', password_confirmation: '123456')

u3 = User.create(name: 'Carlos', email: 'carlos@vacationplanner.com', password: '123456', password_confirmation: '123456')

d1 = Destination.create(place: 'Tulum, Q. Ro, Mexico')

d2 = Destination.create(place: 'Bacalar, Q. Ro, Mexico')

d3 = Destination.create(place: 'Cusco, Peru')

d4 = Destination.create(place: 'London, Ontario, Canada')

d5 = Destination.create(place: 'Queretaro, Mexico')

d6 = Destination.create(place: 'Santa Maria, RS, Brazil')

it1 = Image.create(destination_id: 1, image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
it2 = Image.create(destination_id: 1, image_url: 'https://images.unsplash.com/photo-1568548740292-7ccd65802bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')
it3 = Image.create(destination_id: 1, image_url: 'https://images.unsplash.com/photo-1561464380-c01da572f971?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=830&q=80')

ib1 = Image.create(destination_id: 2, image_url: 'https://images.unsplash.com/photo-1576246837439-dd0d7f347759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80')
ib2 = Image.create(destination_id: 2, image_url: 'https://images.unsplash.com/photo-1529671241112-2c70ebef934d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=848&q=80')
ib3 = Image.create(destination_id: 2, image_url: 'https://images.unsplash.com/photo-1594072551423-01ec561af5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80')

ic1 = Image.create(destination_id: 3, image_url: 'https://images.unsplash.com/photo-1533856797653-6f6dbf370efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
ic2 = Image.create(destination_id: 3, image_url: 'https://images.unsplash.com/photo-1545330785-15356daae141?ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80')
ic3 = Image.create(destination_id: 3, image_url: 'https://images.unsplash.com/photo-1578594903885-51d6d8bcdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')

il1 = Image.create(destination_id: 4, image_url: 'https://images.unsplash.com/photo-1595660192522-27fb00defb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80')
il2 = Image.create(destination_id: 4, image_url: 'https://images.unsplash.com/photo-1523312628884-26d58dc8bd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1034&q=80')
il3 = Image.create(destination_id: 4, image_url: 'https://images.unsplash.com/photo-1500185760083-2355a0bc5d35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')

iq1 = Image.create(destination_id: 5, image_url: 'https://images.unsplash.com/photo-1590125664444-1d0404bc8adc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
iq2 = Image.create(destination_id: 5, image_url: 'https://images.unsplash.com/photo-1548402539-86c2670fe771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')
iq3 = Image.create(destination_id: 5, image_url: 'https://images.unsplash.com/photo-1512442827816-8e5a088619c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80')

is1 = Image.create(destination_id: 6, image_url: 'https://www.sistur.rs.gov.br/multimidia_promocional/MD_2014021411083211._santuario_de_schoenstatt.jpg')
is2 = Image.create(destination_id: 6, image_url: 'https://www.sistur.rs.gov.br/multimidia_promocional/MD_20140214104108rg.jpg')
is3 = Image.create(destination_id: 6, image_url: 'https://www.sistur.rs.gov.br/multimidia_promocional/GD_201401140953452_santa_maria..jpg')
