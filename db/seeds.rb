# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stock.destroy_all ; User.destroy_all ; Watch.destroy_all ; Holding.destroy_all

CSV::Converters[:blank_to_nil] = lambda do |field|
  field && (field.empty? || field == 'n/a') ? nil : field
end

nyse = CSV.new(File.read('db/stock_seeds/nyse.csv'), :headers => true, :header_converters => :symbol, :converters => [:all, :blank_to_nil])
nyse = nyse.to_a.map {|row| row.to_hash.select{ |k, v| [:symbol, :name, :price, :marketcap, :ipo, :sector, :industry].include?(k) } }
nyse = nyse.reject{ |obj| obj[:price].nil? }

nasdaq = CSV.new(File.read('db/stock_seeds/nasdaq.csv'), :headers => true, :header_converters => :symbol, :converters => [:all, :blank_to_nil])
nasdaq = nasdaq.to_a.map {|row| row.to_hash.select{ |k, v| [:symbol, :name, :price, :marketcap, :ipo, :sector, :industry].include?(k) } }
nasdaq = nasdaq.reject{ |obj| obj[:price].nil? }

nyse.each do |stock|
  next if Stock.find_by(symbol: stock[:symbol]) || stock[:symbol] =~ (/([^A-Z])/)
  stock[:exchange] = 'NYSE'
  Stock.create!(stock)
end

nasdaq.each do |stock|
  next if Stock.find_by(symbol: stock[:symbol]) || stock[:symbol] =~ (/([^A-Z])/)
  stock[:exchange] = 'NASDAQ'
  Stock.create!(stock)
end

user = User.create!(username: 'DemoUser', password: 'DemoPassword09182020', email: 'user@demo.com', first_name: 'Demo', last_name: 'User')

Holding.create!(user_id: user.id, stock_symbol: 'AAPL', amt: 10.0)

