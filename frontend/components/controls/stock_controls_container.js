import { fetchSingleStock } from '../../actions/stock_actions';
import { loginUser, updateUserParams } from '../../actions/session_actions';
import { fetchWatchlist, addStockToWatchlist, removeStockFromWatchlist } from '../../actions/watchlist_actions';
import { fetchPortfolio, sellStock, buyStock } from '../../actions/portfolio_actions';
import { connect } from 'react-redux';
import StockControls from './stock_controls';

const mapStateToProps = ({ entities: { currentUser, watchlist, stocks, portfolio }, ui: { loading } }, { match: { params } }) => ({
  stocks,
  watchlist,
  portfolio,
  currentUser,
  loading,
  params
});

const mapDispatchToProps = dispatch => ({
  fetchSingleStock: symbol => dispatch(fetchSingleStock(symbol)),
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  addStockToWatchlist: symbol => dispatch(addStockToWatchlist(symbol)),
  removeStockFromWatchlist: symbol => dispatch(removeStockFromWatchlist(symbol)),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  updateUserParams: () => dispatch(updateUserParams()),
  buyStock: (symbol, order) => dispatch(buyStock(symbol, order)),
  sellStock: (symbol, order) => dispatch(sellStock(symbol, order)),
  reloadPortfolio: () => dispatch(clearLoadingState('portfolio')),
  reloadBuyingPower: () => dispatch(clearLoadingState('users')),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockControls);