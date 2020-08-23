# @stocks.each do |stock|
#   json.set! stock.symbol do
#     json.extract! stock, :name, :price
#   end
# end

json.array! @stocks, :symbol, :name