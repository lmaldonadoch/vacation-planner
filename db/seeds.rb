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

d1 = Destination.create(place: 'Mexico')

d2 = Destination.create(place: 'Peru')

d3 = Destination.create(place: 'Canada')

d4 = Destination.create(place: 'Brazil')

d5 = Destination.create(place: 'Greece')

d6 = Destination.create(place: 'Japan')

im1 = Image.create(destination_id: 1, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
im2 = Image.create(destination_id: 1, city: 'Bacalar', image_url: 'https://images.unsplash.com/photo-1576246837439-dd0d7f347759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80')
im3 = Image.create(destination_id: 1,city: 'Queretaro', image_url: 'https://images.unsplash.com/photo-1590125664444-1d0404bc8adc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')

ip1 = Image.create(destination_id: 2, city: 'Cusco (Machu Picchu', image_url: 'https://images.unsplash.com/photo-1533856797653-6f6dbf370efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
ip2 = Image.create(destination_id: 2, city: 'Cusco (Seven Colors Mountain)', image_url: 'https://images.unsplash.com/photo-1545330785-15356daae141?ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80')
ip3 = Image.create(destination_id: 2, city: 'Lima', image_url: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1381&q=80')

ic1 = Image.create(destination_id: 3, city: 'Montreal', image_url: 'https://images.unsplash.com/photo-1558567612-559ce068ba31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
ic2 = Image.create(destination_id: 3, city: 'London', image_url: 'https://images.unsplash.com/photo-1595660192522-27fb00defb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80')
ic3 = Image.create(destination_id: 3, city: 'Québec City', image_url: 'https://images.unsplash.com/photo-1558486517-1025f6d30fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')

ib1 = Image.create(destination_id: 4, city: 'Rio de Janeiro', image_url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ib2 = Image.create(destination_id: 4, city: 'São Paulo', image_url: 'https://images.unsplash.com/photo-1524171877404-222de92181e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')
ib3 = Image.create(destination_id: 4, city: 'Ponta Negra', image_url: 'https://images.unsplash.com/photo-1515898698999-18f625d67499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')

ig1 = Image.create(destination_id: 5, city: 'Athens', image_url: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ig2 = Image.create(destination_id: 5, city: 'Santorini', image_url: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ig3 = Image.create(destination_id: 5, city: 'Kerkira', image_url: 'https://images.unsplash.com/photo-1500198894528-3819de6ad916?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')

ij1 = Image.create(destination_id: 6, city: 'Fujiyoshida-shi', image_url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1369&q=80')
ij2 = Image.create(destination_id: 6, city: 'Kyoto', image_url: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80')
ij3 = Image.create(destination_id: 6, city: 'Tokio', image_url: 'https://images.unsplash.com/photo-1570695171845-38ff5b155898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
