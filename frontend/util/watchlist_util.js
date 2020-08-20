export const getWatchlist = () => (
  $.ajax({
    url: '/api/watchlists'
  })
);

export const postStockToWatchlist = stock => (
  $.ajax({
    url: `/api/stocks/${stock.symbol}/watchlists`,
    method: 'POST'
  })
);

export const postCryptoToWatchlist = crypto => (
  $.ajax({
    url: `/api/cryptos/${crypto.symbol}/watchlists`,
    method: 'POST'
  })
);

export const deleteStockFromWatchlist = stock => (
  $.ajax({
    url: `/api/stocks/${stock.symbol}/watchlists/`,
    method: 'DELETE'
  })
);

export const deleteCryptoFromWatchlist = crypto => (
  $.ajax({
    url: `/api/cryptos/${crypto.symbol}/watchlists/`,
    method: 'DELETE'
  })
);