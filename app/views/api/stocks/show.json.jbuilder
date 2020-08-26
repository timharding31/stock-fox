json.set! @stock.symbol do
  json.partial! 'api/stocks/stock_detail', stock: @stock
end