export const getWatchlist = () => (
  $.ajax({
    url: '/api/watchlists'
  })
);

export const postStockToWatchlist = symbol => (
  $.ajax({
    url: `/api/stocks/${symbol}/watchlists`,
    method: 'POST'
  })
);

export const deleteStockFromWatchlist = symbol => (
  $.ajax({
    url: `/api/stocks/${symbol}/watchlists/`,
    method: 'DELETE'
  })
);