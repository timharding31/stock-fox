import { RECEIVE_STOCK_PRICES, CLEAR_STOCK_PRICES, CLEAR_ALL_STOCK_PRICES } from '../../actions/price_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';
import { stockPriceSelector } from '../../selectors/stock_price_selector';

export default (state = {}, { prices, type, range }) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_STOCK_PRICES:
      return Object.assign({}, state, { [range]: stockPriceSelector(prices) });
    case CLEAR_STOCK_PRICES:
      return Object.assign({}, state, { [range]: null });
    case RELOAD_ALL:
    case CLEAR_ALL_STOCK_PRICES:
      return {};
    default:
      return state;
  }
};