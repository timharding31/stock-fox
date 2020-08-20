const moment = require('moment');

const curDate = moment().format('YYYY-MM-DD');
const prevDate = moment().subtract(1, 'months').format('YYYY-MM-DD');

export const getStockNews = stock => (
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${[stock.symbol]}&from=${prevDate}&to=${curDate}&token=${window.finnhubAPIKey}`
  })

);