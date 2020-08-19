export const fetchWatchlist = () => (
  $.ajax({
    url: '/api/watchlists'
  })
);