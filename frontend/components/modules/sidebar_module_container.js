import { connect } from 'react-redux';
import { fetchWatchlist } from '../../actions/watchlist_actions';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import { fetch1DStockPrices, deleteStockPrices } from '../../actions/price_actions';
import SidebarModule from './sidebar';

const mapStateToProps = ({ entities: { watchlist, stocks, portfolio, prices }, ui: { loading } }) => ({
  portfolio,
  watchlist,
  stocks,
  loading,
  prices
});

const mapDispatchToProps = dispatch => ({
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  fetch1DStockPrices: symbol => dispatch(fetch1DStockPrices(symbol)),
  deleteStockPrices: () => dispatch(deleteStockPrices('1D')),
  reloadPortfolio: () => dispatch(clearLoadingState('portfolio')),
  reloadBuyingPower: () => dispatch(clearLoadingState('users')),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarModule);