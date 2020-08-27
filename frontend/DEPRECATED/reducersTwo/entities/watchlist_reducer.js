import { RECEIVE_WATCHLIST } from '../../../actions/watchlist_actions';

export default (state = [], { type, watchlist }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch (type) {
    case RECEIVE_WATCHLIST:
      nextState = watchlist;
    default:
      return state;
  }
};