import { RECEIVE_STOCK_NEWS } from '../actions/news_actions';
import { RECEIVE_STOCK_DETAILS, RECEIVE_SINGLE_STOCK } from '../actions/asset_actions';
import { RECEIVE_WATCHLIST } from '../actions/watchlist_actions';
import { RECEIVE_STOCK_PRICES, CLEAR_STOCK_PRICES, CLEAR_ALL_STOCK_PRICES } from '../actions/chart_actions';
import { RELOAD_ALL, RELOAD_ONE } from '../actions/ui_actions';
import { RECEIVE_STOCK_SEARCH_RESULTS } from '../actions/search_actions';

const _priceBaseState = {
  '1D': true,
  '1W': true,
  '1M': true,
  '3M': true,
  '1Y': true,
}

const _defaultLoadingState = {
  singleStock: true,
  news: true,
  prices: _priceBaseState,
  stockDetails: true,
  watchlist: true,
  searchResults: true,
}

export default (state=_defaultLoadingState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STOCK_SEARCH_RESULTS:
      return Object.assign({}, state, { searchResults: false });
    case RECEIVE_SINGLE_STOCK:
      return Object.assign({}, state, { singleStock: false });
    case RECEIVE_STOCK_NEWS:
      return Object.assign({}, state, { news: false });
    case RECEIVE_STOCK_DETAILS:
      return (Object.assign({}, state, { stockDetails: false }));
    case RECEIVE_WATCHLIST:
      return (Object.assign({}, state, { watchlist: false }));
    case RECEIVE_STOCK_PRICES:
      return Object.assign({}, state, {prices: Object.assign({}, state.prices, { [action.range]: false }) })
    case CLEAR_STOCK_PRICES:
      return Object.assign({}, state, { prices: Object.assign({}, state.prices, { [action.range]: true }) })
    case CLEAR_ALL_STOCK_PRICES:
      return Object.assign({}, state, { prices: _priceBaseState });
    case RELOAD_ONE:
      return Object.assign({}, state, { [action.component]: true });
    case RELOAD_ALL:
      return _defaultLoadingState;
    default:
      return state;
  }
}