export const fetchSingleStock = symbol => (
  $.ajax({
    url: `/api/stocks/${symbol}`
  })
);

export const fetchSingleCrypto = symbol => (
  $.ajax({
    url: `/api/cryptos/${symbol}`
  })
);