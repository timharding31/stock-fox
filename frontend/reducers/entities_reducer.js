import { combineReducers } from 'redux';
import UsersReducer from './entities/users_reducer';

export default combineReducers({
  users: UsersReducer,
});