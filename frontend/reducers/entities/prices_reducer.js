import { RECEIVE_STOCK_PRICES, CLEAR_STOCK_PRICES, CLEAR_ALL_STOCK_PRICES } from '../../actions/chart_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_PRICES:
      let prices;
      if (action.prices.historical) {
        prices = action.prices.historical
          .map(obj => ({ date: new Date(obj.date), price: obj.close }))
          .sort(obj => -obj.date);
      } else {
        prices = action.prices
          .map(obj => ({ date: new Date(obj.date), price: obj.close }))
          .sort(obj => -obj.date);
      }
      return Object.assign({}, state, { [action.range]: prices });
    case CLEAR_STOCK_PRICES:
      return Object.assign({}, state, { [action.range]: null });
    case RELOAD_ALL:
    case CLEAR_ALL_STOCK_PRICES:
      return {};
    default:
      return state;
  }
};