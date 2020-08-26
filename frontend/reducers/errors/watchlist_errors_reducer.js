import { RECEIVE_WATCHLIST_ERRORS,
  // CLEAR_WATCHLIST_ERRORS
} from '../../actions/watchlist_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST_ERRORS:
      return action.errors;
    // case CLEAR_WATCHLIST_ERRORS:
    //   return [];
    default:
      return state;
  }
};