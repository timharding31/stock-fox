import { getMaxStockPrices,
  get5YStockPrices,
  get1YStockPrices,
  get3MStockPrices,
  get1MStockPrices,
  get1WStockPrices,
  get1DStockPrices } from '../util/fmp_api_util';

import { patchStockPrice } from '../util/asset_util';

export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
export const CLEAR_STOCK_PRICES = 'CLEAR_STOCK_PRICES';
export const CLEAR_ALL_STOCK_PRICES = 'CLEAR_ALL_STOCK_PRICES';

const receiveStockPrices = (prices, range) => ({
  type: RECEIVE_STOCK_PRICES,
  prices,
  range
});

const clearStockPrices = range => ({
  type: CLEAR_STOCK_PRICES,
  range
});

const clearAllStockPrices = () => ({
  type: CLEAR_ALL_STOCK_PRICES
});

export const deleteStockPrices = range => dispatch => {
  if (!range) {
    return dispatch(clearAllStockPrices());
  } else {
    return dispatch(clearStockPrices(range));
  }
};

export const fetchMaxStockPrices = stock => dispatch => getMaxStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, 'MAX')));

export const fetch5YStockPrices = stock => dispatch => get5YStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, '5Y')));

export const fetch1YStockPrices = stock => dispatch => get1YStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, '1Y')));

export const fetch3MStockPrices = stock => dispatch => get3MStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, '3M')));

export const fetch1MStockPrices = stock => dispatch => get1MStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, '1M')));

export const fetch1WStockPrices = stock => dispatch => get1WStockPrices(stock)
  .then(prices => dispatch(receiveStockPrices(prices, '1W')));

export const fetch1DStockPrices = stock => dispatch => get1DStockPrices(stock)
  .then(prices => {
    const finalPrice = (prices[0].close * 100);
    patchStockPrice(stock, finalPrice);
    return dispatch(receiveStockPrices(prices, '1D'));
  });