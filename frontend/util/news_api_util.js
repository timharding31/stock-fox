const moment = require('moment');
import { queryFromStock } from './data_handling_util';

export const getStockNews = stock => (
  $.ajax({
    headers: { "Ocp-Apim-Subscription-Key": window.newsAPIKey },
    url: `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${stock.symbol}+${queryFromStock(stock)}&freshness=Week&category=Business`
  })
);