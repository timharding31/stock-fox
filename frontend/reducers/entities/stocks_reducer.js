import { combineReducers } from 'redux';
import { stockSummaryReducer, stockDetailReducer } from './_stock_precision_reducer';

export default combineReducers({
  summary: stockSummaryReducer,
  detail: stockDetailReducer,
});