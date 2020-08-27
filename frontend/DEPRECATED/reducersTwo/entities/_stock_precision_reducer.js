import { RECEIVE_SINGLE_STOCK, RECEIVE_STOCK_DETAILS } from '../../actions/stock_actions';

const _summaryBaseState = { bySymbol: null, allSymbols: [] }
const _detailBaseState = { bySymbol: null, allSymbols: [] }

export const stockSummaryReducer = (state=_summaryBaseState, {type, stock}) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_SINGLE_STOCK:
      nextState.bySymbol[stock.symbol] = stock;
      nextState.allSymbols.push(stock.symbol);
      return nextState;
    default:
      return state;
  }
}
export const stockDetailReducer = (state=_detailBaseState, {type, symbol, detail}) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_STOCK_DETAILS:
      nextState.bySymbol[symbol] = detail;
      nextState.allSymbols.push(symbol);
      return nextState;
    default:
        return state;
  }
}