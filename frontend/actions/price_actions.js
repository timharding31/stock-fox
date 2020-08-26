import { getMaxStockPrices,
  get5YStockPrices,
  get1YStockPrices,
  get3MStockPrices,
  get1MStockPrices,
  get1WStockPrices,
  get1DStockPrices } from '../util/fmp_api_util';

import { patchStockPrice } from '../util/stock_util';

export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
export const CLEAR_STOCK_PRICES = 'CLEAR_STOCK_PRICES';
export const CLEAR_ALL_STOCK_PRICES = 'CLEAR_ALL_STOCK_PRICES';

const receiveStockPrices = (symbol, prices, range) => ({
  type: RECEIVE_STOCK_PRICES,
  symbol,
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

export const fetchMaxStockPrices = symbol => dispatch => getMaxStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, 'MAX')));

export const fetch5YStockPrices = symbol => dispatch => get5YStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, '5Y')));

export const fetch1YStockPrices = symbol => dispatch => get1YStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, '1Y')));

export const fetch3MStockPrices = symbol => dispatch => get3MStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, '3M')));

export const fetch1MStockPrices = symbol => dispatch => get1MStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, '1M')));

export const fetch1WStockPrices = symbol => dispatch => get1WStockPrices(symbol)
  .then(prices => dispatch(receiveStockPrices(symbol, prices, '1W')));

export const fetch1DStockPrices = symbol => dispatch => get1DStockPrices(symbol)
  .then(prices => {
    const finalPrice = prices[0].close;
    patchStockPrice(symbol, finalPrice);
    return dispatch(receiveStockPrices(symbol, prices, '1D'));
  });