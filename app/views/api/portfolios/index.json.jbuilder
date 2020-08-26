@portfolio.each do |holding|
  json.set! holding.stock_symbol do
    json.partial! 'api/portfolios/holding', holding: holding
  end
end