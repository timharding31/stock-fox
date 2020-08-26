import { RECEIVE_STOCK_PRICES, CLEAR_STOCK_PRICES } from '../../actions/price_actions';
import { stockPriceSelector } from '../../selectors/stock_price_selector';

const _rangeBaseState = { bySymbol: {}, allSymbols: [] };
const _pricesBaseState = {
  '1D': { bySymbol: {}, allSymbols: [] },
  '1W': { bySymbol: {}, allSymbols: [] },
  '1M': { bySymbol: {}, allSymbols: [] },
  '3M': { bySymbol: {}, allSymbols: [] },
  '1Y': { bySymbol: {}, allSymbols: [] }
}

export default (state = _pricesBaseState, { type, symbol, prices, range }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch (type) {
    case RECEIVE_STOCK_PRICES:
      nextState[range].bySymbol[symbol] = stockPriceSelector(prices);
      nextState[range].allSymbols.push(symbol);
      return nextState;
    case CLEAR_STOCK_PRICES:
      nextState[range] = { bySymbol: {}, allSymbols: [] }
      return nextState;
    default:
      return state;
  }
}