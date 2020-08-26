import { RECEIVE_PORTFOLIO } from '../../actions/portfolio_actions';

const _portfolioBaseState = { bySymbol: null, allSymbols: [] };

export default (state=_portfolioBaseState, { type, portfolio }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_PORTFOLIO:
      debugger
      nextState[bySymbol] = portfolio;
      nextState[allSymbols] = Object.keys(portfolio);
      return nextState;
    default:
      return state;
  }

}