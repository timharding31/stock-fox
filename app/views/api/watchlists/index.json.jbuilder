@watchlist.each do |asset|
  json.partial! 'api/watchlists/asset_summary', asset: asset
end