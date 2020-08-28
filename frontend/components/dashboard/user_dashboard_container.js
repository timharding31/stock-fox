import { fetchStocksBySector } from '../../actions/stock_actions';
import { updateUserParams, addFunds } from '../../actions/session_actions';
import { fetchWatchlist, addStockToWatchlist, removeStockFromWatchlist } from '../../actions/watchlist_actions';
import { fetchPortfolio, sellStock, buyStock } from '../../actions/portfolio_actions';
import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';

const mapStateToProps = ({ entities: { currentUser, watchlist, stocks, portfolio }, ui: { session, loading } }, { match: { params } }) => ({
  stocks,
  watchlist,
  portfolio,
  currentUser,
  loading,
  params,
});

const mapDispatchToProps = dispatch => ({
  addFunds: (userId, amt) => dispatch(addFunds(userId, amt)),
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  removeStockFromWatchlist: symbol => dispatch(removeStockFromWatchlist(symbol)),
  addStockToWatchlist: symbol => dispatch(addStockToWatchlist(symbol)),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  buyStock: (symbol, order) => dispatch(buyStock(symbol, order)),
  sellStock: (symbol, order) => dispatch(sellStock(symbol, order)),
  updateUserParams: () => dispatch(updateUserParams()),
  fetchStocksBySector: sector => dispatch(fetchStocksBySector(sector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);