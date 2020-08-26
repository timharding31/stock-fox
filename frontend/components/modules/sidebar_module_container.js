import { connect } from 'react-redux';
import { fetchWatchlist, resetWatchlistErrors } from '../../actions/watchlist_actions';
import { fetchPortfolio, resetPortfolioErrors } from '../../actions/portfolio_actions';
import { fetch1DStockPrices, deleteStockPrices } from '../../actions/price_actions';
import SidebarModule from './sidebar';

const mapStateToProps = ({ entities: { watchlist, stocks, portfolio, prices }, ui: { loading, errors } }) => ({
  portfolio,
  watchlist,
  stocks,
  loading,
  prices,
  errors
});

const mapDispatchToProps = dispatch => ({
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  fetch1DStockPrices: symbol => dispatch(fetch1DStockPrices(symbol)),
  deleteStockPrices: () => dispatch(deleteStockPrices('1D')),
  reloadPortfolio: () => dispatch(clearLoadingState('portfolio')),
  reloadBuyingPower: () => dispatch(clearLoadingState('users')),
  resetWatchlistErrors: () => dispatch(resetWatchlistErrors()),
  resetPortfolioErrors: () => dispatch(resetPortfolioErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarModule);