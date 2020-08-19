import { combineReducers } from 'redux';
import UsersReducer from './entities/users_reducer';
import WatchlistReducer from './entities/watchlist_reducer';

export default combineReducers({
  users: UsersReducer,
  watchlist: WatchlistReducer,
});