import { getSingleStock, getSingleCrypto, patchStockInfo } from '../util/asset_util';
import { getStockProfile } from '../util/fmp_api_util';

export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_SINGLE_CRYPTO = 'RECEIVE_SINGLE_CRYPTO';
export const RECEIVE_STOCK_DETAILS = 'RECEIVE_STOCK_DETAILS';

const receiveSingleStock = stock => ({
  type: RECEIVE_SINGLE_STOCK,
  stock
});

const receiveSingleCrypto = crypto => ({
  type: RECEIVE_SINGLE_CRYPTO,
  crypto
});

const receiveStockDetail = (symbol, detail) => ({
  type: RECEIVE_STOCK_DETAILS,
  symbol,
  detail
});

export const fetchSingleStock = symbol => dispatch => getSingleStock(symbol)
  .then(stock => dispatch(receiveSingleStock(stock)));

export const fetchSingleCrypto = symbol => dispatch => getSingleCrypto(symbol)
  .then(crypto => dispatch(receiveSingleCrypto(crypto)));

export const fetchStockDetail = stock => dispatch => getStockProfile(stock)
  .then(stockDetail => {
    stockDetail = { ...stockDetail[0] };
    patchStockInfo(stock, stockDetail);
    return dispatch(receiveStockDetail(stockDetail.symbol, stockDetail));
  });