import { RECEIVE_WATCHLIST } from '../../../actions/watchlist_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      const watchedCryptos = action.watchlist.filter(asset => (asset.type === 'Crypto'));
      return watchedCryptos.map(crypto => crypto.symbol);
    // case LOGOUT_CURRENT_USER:
    //   return [];
    default:
      return state;
  }
};