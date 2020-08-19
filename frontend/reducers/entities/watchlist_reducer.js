import { combineReducers } from 'redux';
import WatchedStocksReducer from './watchlist/watched_stocks_reducer';
import WatchedCryptosReducer from './watchlist/watched_cryptos_reducer';

export default combineReducers({
  stocks: WatchedStocksReducer,
  crypto: WatchedCryptosReducer,
});