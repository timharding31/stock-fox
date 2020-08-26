import { RECEIVE_PORTFOLIO_ERRORS, CLEAR_PORTFOLIO_ERRORS } from '../../actions/portfolio_actions';

export default (state=[], { type, errors }) => {
  Object.freeze(state)
  switch(type) {
    case RECEIVE_PORTFOLIO_ERRORS:
      return errors;
    case CLEAR_PORTFOLIO_ERRORS:
      return [];
    default:
      return state;
  }
}