export const getPortfolio = () => (
  $.ajax({
    url: 'api/portfolios'
  })
);

export const postStockToPortfolio = (symbol, order) => (
  $.ajax({
    url: `/api/stocks/${symbol}/portfolios`,
    method: 'POST',
    data: { order }
  })
);

export const deleteStockFromPortfolio = (symbol, order) => (
  $.ajax({
    url: `/api/stocks/${symbol}/portfolios/`,
    method: 'DELETE',
    data: { order }
  })
);