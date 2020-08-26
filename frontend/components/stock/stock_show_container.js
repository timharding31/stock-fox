import { fetchSingleStock, fetchStockDetail } from '../../actions/stock_actions';
import { fetchStockNews } from '../../actions/news_actions';
// import { fetchWatchlist, addStockToWatchlist, removeStockFromWatchlist } from '../../actions/watchlist_actions';
import {
  fetch1YStockPrices,
  fetch3MStockPrices,
  fetch1MStockPrices,
  fetch1WStockPrices,
  fetch1DStockPrices,
  deleteStockPrices
} from '../../actions/price_actions';
import { clearLoadingState } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import StockShow from './stock_show';

const mapStateToProps = ({ entities: { prices, watchlist, stocks, news }, ui: { loading } }, { match: { params } }) => ({
  params,
  watchlist,
  prices,
  news,
  loading,
  stocks
});

const mapDispatchToProps = dispatch => ({
  reload: component => dispatch(clearLoadingState(component)),
  fetchSingleStock: symbol => dispatch(fetchSingleStock(symbol)),
  fetchStockDetail: symbol => dispatch(fetchStockDetail(symbol)),
  fetchStockNews: stock => dispatch(fetchStockNews(stock)),
  // fetchWatchlist: () => dispatch(fetchWatchlist()),
  // addStockToWatchlist: symbol => dispatch(addStockToWatchlist(symbol)),
  // removeStockFromWatchlist: symbol => dispatch(removeStockFromWatchlist(symbol)),
  deleteStockPrices: range => dispatch(deleteStockPrices(range)),
  fetchStockPrices: {
    '1Y': symbol => dispatch(fetch1YStockPrices(symbol)),
    '3M': symbol => dispatch(fetch3MStockPrices(symbol)),
    '1M': symbol => dispatch(fetch1MStockPrices(symbol)),
    '1W': symbol => dispatch(fetch1WStockPrices(symbol)),
    '1D': symbol => dispatch(fetch1DStockPrices(symbol)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);