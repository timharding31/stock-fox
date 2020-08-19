const arrayToObject = array => array.reduce((obj, item) => {
    obj[item['symbol']] = item
    return obj
  }, {}
);

import { RECEIVE_WATCHLIST } from '../../actions/asset_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return Object.assign({}, state, arrayToObject(action.watchlist));
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
