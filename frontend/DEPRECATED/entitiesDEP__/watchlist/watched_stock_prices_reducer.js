import { RECEIVE_WATCHLIST_PRICES } from '../../../actions/watchlist_actions';
import { stockPriceSelector } from '../../../selectors/stock_price_selector.js';

export default (state={}, { type, symbol, prices }) => {
  Object.freeze(state)
  let nextState = { ...state };
  switch(type) {
    case RECEIVE_WATCHLIST_PRICES:
      nextState[symbol] = stockPriceSelector(prices);
      return nextState;
    default:
      return state;
  }
}