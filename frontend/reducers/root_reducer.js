import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const AppReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
});

export default (state={}, action) => {
  if (action.type === LOGOUT_CURRENT_USER) state = undefined;
  return AppReducer(state, action);
}