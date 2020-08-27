import { RECEIVE_STOCK_SEARCH_RESULTS } from '../../actions/search_actions';

export default (state=[], { type, results }) => {
  Object.freeze(state)

  switch(type) {
    case RECEIVE_STOCK_SEARCH_RESULTS:
      return results;
    default:
      return state;
  }
}