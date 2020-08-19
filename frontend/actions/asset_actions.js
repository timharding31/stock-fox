import { fetchWatchlist } from '../util/watchlist_util';

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
})

export const getWatchlist = () => dispatch => fetchWatchlist()
  .then(watchlist => dispatch(receiveWatchlist(watchlist)), err => dispatch(receiveWatchlistErrors(err.responseJSON)));