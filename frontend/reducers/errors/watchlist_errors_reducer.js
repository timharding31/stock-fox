import { RECEIVE_WATCHLIST_ERRORS,
  CLEAR_WATCHLIST_ERRORS
} from '../../actions/watchlist_actions';

export default (state = [], {type, errors}) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_WATCHLIST_ERRORS:
      return errors;
    case CLEAR_WATCHLIST_ERRORS:
      return [];
    default:
      return state;
  }
};