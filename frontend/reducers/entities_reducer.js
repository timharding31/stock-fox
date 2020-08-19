import { combineReducers } from 'redux';
import UsersReducer from './entities/users_reducer';
import WatchlistReducer from './entities/watchlist_reducer';
import NewsReducer from './entities/news_reducer';
import StockDetailsReducer from './entities/stock_details_reducer';
import CryptoDetailsReducer from './entities/crypto_details_reducer';

export default combineReducers({
  users: UsersReducer,
  watchlist: WatchlistReducer,
  stocks: StockDetailsReducer,
  crypto: CryptoDetailsReducer,
  news: NewsReducer,
});