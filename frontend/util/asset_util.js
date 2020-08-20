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

export const patchStockPrice = (stock, price) => (
  $.ajax({
    url: `api/stocks/${stock.symbol}`,
    method: 'PATCH',
    data: { price }
  })
);