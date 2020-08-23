import { stockSearch } from '../util/search_util';

export const RECEIVE_STOCK_SEARCH_RESULTS = 'RECEIVE_STOCK_SEARCH_RESULTS';

const receiveStockSearchResults = results => ({
  type: RECEIVE_STOCK_SEARCH_RESULTS,
  results
});

export const fetchStockSearchResults = search => dispatch => stockSearch(search)
  .then(results => dispatch(receiveStockSearchResults(results)));