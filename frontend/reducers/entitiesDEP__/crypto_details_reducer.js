
import { arrayToAssetObj } from '../../util/data_handling_util';
import { RECEIVE_SINGLE_CRYPTO } from '../../actions/stock_actions';
import { RECEIVE_WATCHLIST } from '../../actions/watchlist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      const watchedCryptos = action.watchlist.filter(asset => (asset.type === 'Crypto'));
      return Object.assign({}, state, arrayToAssetObj(watchedCryptos));
    case RECEIVE_SINGLE_CRYPTO:
      return Object.assign({}, state, { [action.crypto.symbol]: action.crypto });
    default:
      return state;
  }
};