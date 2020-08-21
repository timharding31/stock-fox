import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import LoadingReducer from './loading_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  loading: LoadingReducer,
});