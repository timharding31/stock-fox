import { RECEIVE_STOCK_ERRORS } from '../../actions/stock_actions';

export default (state=[], { type, errors }) => {
  Object.freeze(state);
  
  switch(type) {
    case RECEIVE_STOCK_ERRORS:
      return errors;
    default:
      return state;
  }
}