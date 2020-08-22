import { getWatchlist,
  postStockToWatchlist,
  postCryptoToWatchlist,
  deleteStockFromWatchlist,
  deleteCryptoFromWatchlist,
} from '../util/watchlist_util';

import { get1DStockPrices } from '../util/fmp_api_util';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';
export const CLEAR_WATCHLIST_ERRORS = 'CLEAR_WATCHLIST_ERRORS';
export const RECEIVE_WATCHLIST_PRICES = 'RECEIVE_WATCHLIST_PRICES';

const receiveWatchlist = watchlist => ({
  type: RECEIVE_WATCHLIST,
  watchlist
});

const receiveWatchlistErrors = errors => ({
  type: RECEIVE_WATCHLIST_ERRORS,
  errors
});

const receiveWatchlistPrices = (symbol, prices) => ({
  type: RECEIVE_WATCHLIST_PRICES,
  symbol,
  prices
})

export const fetchWatchlistPrices = symbol => dispatch => get1DStockPrices({ symbol: symbol })
  .then(prices => dispatch(receiveWatchlistPrices(symbol, prices)))


export const fetchWatchlist = () => dispatch => getWatchlist()
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));


export const addStockToWatchlist = stock => dispatch => postStockToWatchlist(stock)
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));

export const removeStockFromWatchlist = stock => dispatch => deleteStockFromWatchlist(stock)
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));

export const addCryptoToWatchlist = crypto => dispatch => postCryptoToWatchlist(crypto)
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));