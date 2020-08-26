import { getSingleStock, patchStockInfo } from '../util/stock_util';
import { getStockProfile } from '../util/fmp_api_util';

export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_STOCK_DETAILS = 'RECEIVE_STOCK_DETAILS';

const receiveSingleStock = (stock, symbol) => ({
  type: RECEIVE_SINGLE_STOCK,
  stock,
  symbol
});

const receiveStockDetail = (symbol, detail) => ({
  type: RECEIVE_STOCK_DETAILS,
  symbol,
  detail
});

export const fetchSingleStock = symbol => dispatch => getSingleStock(symbol)
  .then(stock => dispatch(receiveSingleStock(stock, symbol)));

export const fetchStockDetail = symbol => dispatch => getStockProfile(symbol)
  .then(stockDetail => {
    stockDetail = { ...stockDetail[0] };
    patchStockInfo(symbol, stockDetail);
    return dispatch(receiveStockDetail(symbol, stockDetail));
  });