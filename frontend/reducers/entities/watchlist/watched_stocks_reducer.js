import { RECEIVE_WATCHLIST } from '../../../actions/watchlist_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      const watchedStocks = action.watchlist.filter(asset => (asset.type === 'Stock'));
      return watchedStocks.map(stock => stock.symbol);
    // case LOGOUT_CURRENT_USER:
    //   return [];
    default:
      return state;
  }
};