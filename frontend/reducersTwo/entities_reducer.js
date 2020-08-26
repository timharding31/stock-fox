import { combineReducers } from 'redux';

import StocksReducer from './entities/stocks_reducer';
import PortfolioReducer from './entities/portfolio_reducer';
import WatchlistReducer from './entities/watchlist_reducer';
import PricesReducer from './entities/prices_reducer';
import UsersReducer from './entities/current_user_reducer';

export default combineReducers({
  currentUser: UsersReducer,
  stocks: StocksReducer,
  portfolio: PortfolioReducer,
  watchlist: WatchlistReducer,
  prices: PricesReducer,
})