import { combineReducers } from 'redux';
import { stockSummaryReducer, stockDetailReducer, sectorsReducer } from './_stock_precision_reducer';

export default combineReducers({
  summary: stockSummaryReducer,
  detail: stockDetailReducer,
  sectors: sectorsReducer,
});