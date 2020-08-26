import { getWatchlist,
  postStockToWatchlist,
  deleteStockFromWatchlist,
} from '../util/watchlist_util';
import { fetchSingleStock } from './stock_actions';
import { fetch1DStockPrices } from './price_actions';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';
export const CLEAR_WATCHLIST_ERRORS = 'CLEAR_WATCHLIST_ERRORS';

const receiveWatchlist = watchlist => ({
  type: RECEIVE_WATCHLIST,
  watchlist
});

const receiveWatchlistErrors = errors => ({
  type: RECEIVE_WATCHLIST_ERRORS,
  errors
});

const clearWatchlistErrors = () => ({
  type: CLEAR_WATCHLIST_ERRORS
});

export const resetWatchlistErrors = () => dispatch => dispatch(clearWatchlistErrors());

export const fetchWatchlist = () => dispatch => getWatchlist()
  .then(watchlist => {
    if (watchlist) {
      watchlist.forEach(symbol => fetchSingleStock(symbol)(dispatch));
      watchlist.forEach(symbol => fetch1DStockPrices(symbol)(dispatch));
    }
    return dispatch(receiveWatchlist(watchlist))
  }, err => dispatch(receiveWatchlistErrors(err.responseJSON)));


export const addStockToWatchlist = symbol => dispatch => postStockToWatchlist(symbol)
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));

export const removeStockFromWatchlist = symbol => dispatch => deleteStockFromWatchlist(symbol)
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));