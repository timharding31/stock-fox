const moment = require('moment');
const prevDate = moment().subtract(1, 'weeks').format('YYYY-MM-DD');

export const getStockNews = stock => (
  $.ajax({
    headers: { "Ocp-Apim-Subscription-Key": window.newsAPIKey },
    url: `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${[stock.symbol]}&freshness=Week&category=Business`
  })
);