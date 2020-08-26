import { getStockNews } from '../util/news_api_util';

export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';

const receiveStockNews = (topic, news) => ({
  type: RECEIVE_STOCK_NEWS,
  news,
  topic
});

export const fetchStockNews = stock => dispatch => getStockNews(stock)
  .then(news => dispatch(receiveStockNews(stock.symbol, news)));