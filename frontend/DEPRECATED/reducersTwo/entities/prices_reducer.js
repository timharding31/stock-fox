import { RECEIVE_STOCK_PRICES } from '../../actions/price_actions';
import { stockPriceSelector } from '../../selectors/stock_price_selector';

const _rangeBaseState = { bySymbol: null, allSymbols: [] };
const _pricesBaseState = {
  '1D': { ..._rangeBaseState },
  '1W': { ..._rangeBaseState },
  '1M': { ..._rangeBaseState },
  '3M': { ..._rangeBaseState },
  '1Y': { ..._rangeBaseState },
}

export default (state = _pricesBaseState, { type, symbol, prices, range }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch (type) {
    case RECEIVE_STOCK_PRICES:
      nextState[range].bySymbol[symbol] = stockPriceSelector(prices);
      nextState[range].allSymbols.push(symbol);
      return nextState;
    default:
      return state;
  }
}