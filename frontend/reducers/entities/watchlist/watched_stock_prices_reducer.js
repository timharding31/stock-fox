import { RECEIVE_WATCHLIST_PRICES } from '../../../actions/watchlist_actions';

export default (state={}, { type, symbol, prices }) => {
  Object.freeze(state)
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_WATCHLIST_PRICES:
      nextState[symbol] = prices;
      return nextState;
    default:
      return state;
  }
}