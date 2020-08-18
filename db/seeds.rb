# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CSV::Converters[:blank_to_nil] = lambda do |field|
#   field && (field.empty? || field == 'n/a') ? nil : field
# end
# nyse = CSV.new(File.read('./stock_symbols/nyse.csv'), :headers => true, :header_converters => :symbol, :converters => [:all, :blank_to_nil])
# nyse = nyse.to_a.map {|row| row.to_hash.select{ |k, v| [:symbol, :name, :price, :marketcap, :ipo, :sector, :industry].include?(k) } }

# nasdaq = CSV.new(File.read('./stock_symbols/nasdaq.csv'), :headers => true, :header_converters => :symbol, :converters => [:all, :blank_to_nil])
# nasdaq = nasdaq.to_a.map {|row| row.to_hash.select{ |k, v| [:symbol, :name, :price, :marketcap, :ipo, :sector, :industry].include?(k) } }

# user = User.find_by(username: 'testusername')

# Stock.destroy_all ; Crypto.destroy_all
# stock = Stock.create!(exchange: 'NYSE', symbol: 'ABC', name: 'ABC Co.', price: 1000)
# coin = Crypto.create!(symbol: 'XYZ', name: 'XYZ Coin', price: 10000)

# watchone = Watch.create!(user_id: user.id, watchable_type: 'Stock', watchable_id: stock.id)
# watchtwo = Watch.create!(user_id: user.id, watchable_type: 'Crypto', watchable_id: coin.id)