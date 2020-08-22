const moment = require('moment');
const prevDate = moment().subtract(1, 'weeks').format('YYYY-MM-DD');

export const getStockNews = stock => (
  $.ajax({
    url: `https://newsapi.org/v2/everything?q=${[stock.symbol]}&from=${prevDate}&sortBy=popularity&apikey=${window.newsAPIKey}`
  })
);