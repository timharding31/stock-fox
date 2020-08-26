import { RECEIVE_PORTFOLIO, RECEIVE_PORTFOLIO_ERRORS } from '../../actions/portfolio_actions';

const _portfolioBaseState = { bySymbol: {}, allSymbols: [] };

export default (state=_portfolioBaseState, { type, portfolio }) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch(type) {
    case RECEIVE_PORTFOLIO:
      nextState['bySymbol'] = portfolio;
      nextState['allSymbols'] = Object.keys(portfolio);
      return nextState;
    case RECEIVE_PORTFOLIO_ERRORS:

    default:
      return state;
  }

}