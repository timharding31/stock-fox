import { RECEIVE_PORTFOLIO } from '../../../actions/portfolio_actions';
import { ownedStockSelector } from '../../../selectors/portfolio_selector';

export default (state = {}, { type, portfolio }) => {
  Object.freeze(state)
  switch (type) {
    case RECEIVE_PORTFOLIO:
      return ownedStockSelector(portfolio);
    default:
      return state;
  }
}