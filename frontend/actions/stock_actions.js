import { getSingleStock, patchStockInfo, getStocksBySector } from '../util/stock_util';
import { getStockProfile } from '../util/fmp_api_util';

export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_STOCK_DETAILS = 'RECEIVE_STOCK_DETAILS';
export const RECEIVE_STOCK_ERRORS = 'RECEIVE_STOCK_ERRORS';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';

const receiveSingleStock = (stock, symbol) => ({
  type: RECEIVE_SINGLE_STOCK,
  stock,
  symbol
});

const receiveStocks = (stocks, sector) => ({
  type: RECEIVE_STOCKS,
  stocks,
  sector
})

const receiveStockDetail = (symbol, detail) => ({
  type: RECEIVE_STOCK_DETAILS,
  symbol,
  detail
});

const receiveStockErrors = errors => ({
  type: RECEIVE_STOCK_ERRORS,
  errors
})

export const fetchStocksBySector = sector => dispatch => getStocksBySector(sector)
  .then(stocks => dispatch(receiveStocks(stocks, sector)), err => dispatch(receiveStockErrors(err.responseJSON)));

export const fetchSingleStock = symbol => dispatch => getSingleStock(symbol)
  .then(stock => dispatch(receiveSingleStock(stock, symbol)));

export const fetchStockDetail = symbol => dispatch => getStockProfile(symbol)
  .then(stockDetail => {
    stockDetail = { ...stockDetail[0] };
    patchStockInfo(symbol, stockDetail);
    return dispatch(receiveStockDetail(symbol, stockDetail));
  });