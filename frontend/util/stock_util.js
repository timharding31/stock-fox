export const getSingleStock = symbol => (
  $.ajax({
    url: `/api/stocks/${symbol}`
  })
);

export const patchStockPrice = (symbol, price) => (
  $.ajax({
    url: `api/stocks/${symbol}`,
    method: 'PATCH',
    data: { price }
  })
);

export const patchStockInfo = (symbol, detail) => (
  $.ajax({
    url: `api/stocks/${symbol}`,
    method: 'PATCH',
    data: {
      name: detail.companyName,
      price: detail.price,
      sector: detail.sector,
      industry: detail.industry
    }
  })
);