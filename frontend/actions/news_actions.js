import { fetchStockNews } from '../util/finnhub_api_util';

export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';

const receiveStockNews = news => ({
  type: RECEIVE_STOCK_NEWS,
  news // array of news objects from API call
});

export const getStockNews = stock => dispatch => fetchStockNews(stock)
  .then(news => dispatch(receiveStockNews(news)));