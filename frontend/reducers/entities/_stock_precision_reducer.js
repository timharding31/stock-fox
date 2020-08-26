import { RECEIVE_SINGLE_STOCK, RECEIVE_STOCK_DETAILS } from '../../actions/stock_actions';

const _summaryBaseState = { bySymbol: {}, allSymbols: [] }
const _detailBaseState = { bySymbol: {}, allSymbols: [] }

export const stockSummaryReducer = (state=_summaryBaseState, {type, stock, symbol}) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_SINGLE_STOCK:
      nextState.bySymbol = Object.assign({}, nextState.bySymbol, stock)
      // nextState.bySymbol[stock.symbol] = stock;
      if (!nextState.allSymbols.includes(symbol)) nextState.allSymbols.push(symbol);
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
      nextState.bySymbol = Object.assign({}, nextState.bySymbol, { [symbol]: detail });
      if (!nextState.allSymbols.includes(symbol)) nextState.allSymbols.push(symbol);
      return nextState;
    default:
        return state;
  }
}