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

d1 = Destination.create(place: 'Mexico', country_description: "Mexico is well known for its turquoise beaches, colonial cities, and warm people. Don't miss the chance to visit this beautiful country.")

d2 = Destination.create(place: 'Peru', country_description: "Peru's gastronomy is considered one of the best in the world. Along with Machu Picchu, Lake Titicaca, and the mysterious Nazca Lines, it is a no brainer for a trip full of adventures and good memories.")

d3 = Destination.create(place: 'Canada', country_description: "Canada has been in the top 3 countries for life quality for many years. It is also home to more than half the lakes in the world, and its national parks are bigger than most countries. Prepare to be amazed!")

d4 = Destination.create(place: 'Brazil', country_description: "Home of the world's largest festival in Rio de Janeiro, famous beaches like Ipanema and Copacabana, and probably the most beautiful women in the world. Brazil will take your breath away in every way.")

d5 = Destination.create(place: 'Greece', country_description: "Greece is a collection of islands, including the gorgeous Santorini and Mykonos. Walk beside the Parthenon and let Athens take you for a ride to the past.")

d6 = Destination.create(place: 'Japan', country_description: "Visit the bamboo forests, the ancient temples, the bullet train, or the busy cities. Any tiny bit of Japan guarantees an unforgettable memory. ")

im1 = Image.create(city_description: "Mayan ruins tower over the sea in Tulum. Explore an underground river under a canopy of stalactites in the sacred caverns of LabnaHa Eco Park, or dive into Cenote Dos Ojos to snorkel inside of caves in the middle of a forest, or relax by the turquoise beaches.", destination_id: 1, city: 'Tulum', image_url: 'https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
im2 = Image.create(city_description: "Located near the Mexico-Belize border, a true paradise awaits travelers in Bacalar. The town sits on the Lagoon of Seven Colors, a lake nicknamed for its beautifully colored water, which makes it the perfect place for stunning sunsets, fresh seafood, and cenote swimming.", destination_id: 1, city: 'Bacalar', image_url: 'https://images.unsplash.com/photo-1576246837439-dd0d7f347759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80')
im3 = Image.create(city_description: "Queretaro is a colonial city surrounded by amazing towns and natural beauties. You can go climb the Peña de Bernal, take a walk in the magical San Miguel de Allende, or go visit the Huasteca full of waterfalls and dense forests.", destination_id: 1,city: 'Queretaro', image_url: 'https://images.unsplash.com/photo-1590125664444-1d0404bc8adc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')

ip1 = Image.create(city_description: "It's no wonder Machu Picchu is Peru's most-visited site. Dating to the mid-1400s, it's a marvel of mortar-free limestone architecture perched on a high plateau deep in the Amazonian jungle. Get there via train from Cusco or, if you're not faint-hearted, make the trip on foot via a multi-day hiking trail—you'll travel through deep Andean gullies and enjoy stunning views.", destination_id: 2, city: 'Cusco (Machu Picchu', image_url: 'https://images.unsplash.com/photo-1533856797653-6f6dbf370efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
ip2 = Image.create(city_description: "Vinicunca, also called Montaña de Siete Colores (Mountain of Seven Colors), is located in the Andes in the Cusco region of Peru. To get to the trailhead, it’s a three-hour drive from Cusco. To get to the lookout, you’ll need to hike about six miles. The trip is fairly challenging but completely worth it. At the summit, you will get to see the Andes peaks along with the amazingly beautiful colored mountain.", destination_id: 2, city: 'Cusco (Rainbow Mountain)', image_url: 'https://images.unsplash.com/photo-1545330785-15356daae141?ixlib=rb-1.2.1&auto=format&fit=crop&w=854&q=80')
ip3 = Image.create(city_description: "Lima, founded by Francisco Pizarro in 1535, is a fascinating city and a treasure trove of history. Explore ancient Incan archeological sites, or stroll through the elegant cathedrals and opulent palaces dating from Spanish colonial times. Downtown Lima is crowded, but you'll enjoy exploring the city's neighborhoods—especially the beachfront areas, which have great shopping and dining and fabulous hotels.", destination_id: 2, city: 'Lima', image_url: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1381&q=80')

ic1 = Image.create(city_description: "Quebec City may be the only fortified city north of Mexico, but it welcomes visitors with open arms. Explore the Citadel, where you might catch Canadian troops staging a military ceremony. As for food, you could splurge on afternoon tea at the Chateau Frontenac, or do as the locals do and snack on poutine—french fries with gravy and cheese curds.", destination_id: 3, city: 'Québec City', image_url: 'https://images.unsplash.com/photo-1558486517-1025f6d30fc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
ic2 = Image.create(city_description: "Montreal, c’est si bon! This French-speaking city is considered the cultural capital of Canada, and is a cosmopolitan celebration of Québécois style. A horse-drawn carriage ride around the cobblestone streets and grand buildings of Vieux-Montréal will give you a taste of European flavor. The Basilique Notre-Dame is a confection of stained glass, and the Plateau Mont-Royal district will delight you with its quaint boutiques and cafés. Dig in to a massive plate of poutine to fuel up for a tour of the epic Olympic Park.", destination_id: 3, city: 'Montreal', image_url: 'https://images.unsplash.com/photo-1558567612-559ce068ba31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
ic3 = Image.create(city_description: "", destination_id: 3, city: 'London', image_url: 'https://images.unsplash.com/photo-1595660192522-27fb00defb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80')

ib1 = Image.create(destination_id: 4, city: 'Rio de Janeiro', image_url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ib2 = Image.create(destination_id: 4, city: 'São Paulo', image_url: 'https://images.unsplash.com/photo-1524171877404-222de92181e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')
ib3 = Image.create(destination_id: 4, city: 'Ponta Negra', image_url: 'https://images.unsplash.com/photo-1515898698999-18f625d67499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')

ig1 = Image.create(destination_id: 5, city: 'Athens', image_url: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ig2 = Image.create(destination_id: 5, city: 'Santorini', image_url: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
ig3 = Image.create(destination_id: 5, city: 'Kerkira', image_url: 'https://images.unsplash.com/photo-1500198894528-3819de6ad916?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')

ij1 = Image.create(destination_id: 6, city: 'Fujiyoshida-shi', image_url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1369&q=80')
ij2 = Image.create(destination_id: 6, city: 'Kyoto', image_url: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80')
ij3 = Image.create(destination_id: 6, city: 'Tokio', image_url: 'https://images.unsplash.com/photo-1570695171845-38ff5b155898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
