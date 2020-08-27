import { combineReducers } from 'redux';
import OwnedStocksReducer from './portfolio/owned_stocks_reducer';
import OwnedStockPricesReducer from './portfolio/owned_stocks_prices_reducer';

export default combineReducers({
  stocks: OwnedStocksReducer,
  prices: OwnedStockPricesReducer,
});