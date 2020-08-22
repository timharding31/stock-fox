import { connect } from 'react-redux';
import { fetchWatchlist, fetchWatchlistPrices } from '../../actions/watchlist_actions';
import WatchlistModule from './watchlist';

const mapStateToProps = ({ entities: { watchlist, stocks }, ui: { loading } }) => ({
  watchlist,
  stocks,
  loading
});

const mapDispatchToProps = dispatch => ({
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  fetchPrices: symbol => dispatch(fetchWatchlistPrices(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistModule);