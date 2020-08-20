export const getSingleStock = symbol => (
  $.ajax({
    url: `/api/stocks/${symbol}`
  })
);

export const getSingleCrypto = symbol => (
  $.ajax({
    url: `/api/cryptos/${symbol}`
  })
);