import { RECEIVE_WATCHLIST } from '../../actions/watchlist_actions';

export default (state = { allSymbols: [] }, { type, watchlist }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch (type) {
    case RECEIVE_WATCHLIST:
      return { allSymbols: watchlist };
    default:
      return state;
  }
};