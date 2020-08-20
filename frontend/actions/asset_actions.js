import { getSingleStock, getSingleCrypto} from '../util/asset_util';

export const RECEIVE_SINGLE_STOCK = 'RECEIVE_SINGLE_STOCK';
export const RECEIVE_SINGLE_CRYPTO = 'RECEIVE_SINGLE_CRYPTO';
export const RECEIVE_PRICE_DETAILS = 'RECEIVE_PRICE_DETAILS';

const receiveSingleStock = stock => ({
  type: RECEIVE_SINGLE_STOCK,
  stock
});

const receiveSingleCrypto = crypto => ({
  type: RECEIVE_SINGLE_CRYPTO,
  crypto
});

// const receivePriceDetails = priceDetails => ({
//   type: RECEIVE_PRICE_DETAILS,
//   priceDetails
// });

export const fetchSingleStock = symbol => dispatch => getSingleStock(symbol)
  .then(stock => dispatch(receiveSingleStock(stock)));

export const fetchSingleCrypto = symbol => dispatch => getSingleCrypto(symbol)
  .then(crypto => dispatch(receiveSingleCrypto(crypto)));

// export const fetchStockPriceDetail = symbol => dispatch => getStockPriceDetail(symbol)
//   .then(priceDetails => dispatch(receivePriceDetails(priceDetails)));