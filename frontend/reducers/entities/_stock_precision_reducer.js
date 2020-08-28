import { RECEIVE_SINGLE_STOCK, RECEIVE_STOCK_DETAILS, RECEIVE_STOCKS } from '../../actions/stock_actions';
import stocksSelector from '../../selectors/stocks_selector';
import { mergeArrays } from '../../util/data_handling_util';

const _summaryBaseState = { bySymbol: {}, allSymbols: [] }
const _detailBaseState = { bySymbol: {}, allSymbols: [] }
const _sectorBaseState = { bySector: {}, allSectors: [] }

export const stockSummaryReducer = (state=_summaryBaseState, {type, stock, symbol, stocks }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_SINGLE_STOCK:
      nextState.bySymbol = Object.assign({}, nextState.bySymbol, stock)
      // nextState.bySymbol[stock.symbol] = stock;
      if (!nextState.allSymbols.includes(symbol)) nextState.allSymbols.push(symbol);
      return nextState;
    case RECEIVE_STOCKS:
      nextState.bySymbol = Object.assign({}, nextState.bySymbol, stocksSelector(stocks));
      nextState.allSymbols = mergeArrays(nextState.allSymbols, Object.keys(stocksSelector(stocks)));
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

export const sectorsReducer = (state=_sectorBaseState, { type, stocks, sector }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_STOCKS:
      nextState.bySector = Object.assign({}, nextState.bySector, { [sector]: stocksSelector(stocks) });
      if (!nextState.allSectors.includes(sector)) nextState.allSectors.push(sector);
      return nextState;
    default:
      return state;
  }
}