import { combineReducers } from 'redux';
import LoginErrorsReducer from './errors/login_errors_reducer';

export default combineReducers({
  login: LoginErrorsReducer,
});