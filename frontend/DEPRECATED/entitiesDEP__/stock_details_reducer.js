import { arrayToAssetObj } from '../../util/data_handling_util';
import { ownedStockSelector } from '../../selectors/portfolio_selector';

import { RECEIVE_SINGLE_STOCK, RECEIVE_STOCK_DETAILS } from '../../actions/stock_actions';
import { RECEIVE_WATCHLIST } from '../../actions/watchlist_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';
import { RECEIVE_PORTFOLIO } from '../../actions/portfolio_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      const watchedStocks = action.watchlist.filter(asset => (asset.type === 'Stock'));
      return Object.assign({}, state, arrayToAssetObj(watchedStocks));
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, state, ownedStockSelector(action.portfolio));
    case RECEIVE_SINGLE_STOCK:
      return Object.assign({}, state, { [action.stock.symbol]: action.stock });
    case RECEIVE_STOCK_DETAILS:
      const newStockDetail = Object.assign({}, state[action.symbol], action.detail);
      return Object.assign({}, state, { [action.symbol]: newStockDetail });
    case RELOAD_ALL:
      return {};
    default:
      return state;
  }
};