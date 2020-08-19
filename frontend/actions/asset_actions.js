import { fetchSingleStock, fetchSingleCrypto } from '../util/asset_util';

export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_SINGLE_CRYPTO = 'RECEIVE_SINGLE_CRYPTO';

const receiveSingleStock = stock => ({
  type: RECEIVE_SINGLE_STOCK,
  stock
});

const receiveSingleCrypto = crypto => ({
  type: RECEIVE_SINGLE_CRYPTO,
  crypto
});

export const getSingleStock = symbol => dispatch => fetchSingleStock(symbol)
  .then(stock => dispatch(receiveSingleStock(stock)));

export const getSingleCrypto = symbol => dispatch => fetchSingleCrypto(symbol)
  .then(crypto => dispatch(receiveSingleCrypto(crypto)));