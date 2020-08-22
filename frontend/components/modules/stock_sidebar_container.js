import { fetchSingleStock } from '../../actions/asset_actions';
import { fetchWatchlist, addStockToWatchlist, removeStockFromWatchlist } from '../../actions/watchlist_actions';
import { connect } from 'react-redux';
import StockSidebar from './stock_sidebar';

const mapStateToProps = ({ entities: { watchlist, stocks }, ui: { loading } }, { match: { params } }) => ({
  stock: Object.assign({}, stocks[params.symbol], { symbol: params.symbol }),
  watchlist: watchlist.stocks,
  loading: loading.watchlist
});

const mapDispatchToProps = dispatch => ({
  fetchSingleStock: symbol => dispatch(fetchSingleStock(symbol)),
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  addStockToWatchlist: stock => dispatch(addStockToWatchlist(stock)),
  removeStockFromWatchlist: stock => dispatch(removeStockFromWatchlist(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockSidebar);