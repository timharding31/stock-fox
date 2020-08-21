import { fetchSingleStock, fetchStockDetail } from '../../actions/asset_actions';
import { fetchStockNews } from '../../actions/news_actions';
import { fetchWatchlist, addStockToWatchlist, removeStockFromWatchlist } from '../../actions/watchlist_actions';
import {
  fetch1YStockPrices,
  fetch3MStockPrices,
  fetch1MStockPrices,
  fetch1WStockPrices,
  fetch1DStockPrices,
  deleteStockPrices
} from '../../actions/chart_actions';
import { clearLoadingState } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import StockShow from './stock_show';

const mapStateToProps = ({ entities: { prices, watchlist, stocks, news }, ui: { loading } }, { match: { params } }) => ({
  stock: Object.assign({}, stocks[params.symbol], { symbol: params.symbol }),
  watchlist: watchlist.stocks,
  prices,
  news,
  loading
});

const mapDispatchToProps = dispatch => ({
  reload: component => dispatch(clearLoadingState(component)),
  fetchSingleStock: symbol => dispatch(fetchSingleStock(symbol)),
  fetchStockDetail: stock => dispatch(fetchStockDetail(stock)),
  fetchStockNews: stock => dispatch(fetchStockNews(stock)),
  fetchWatchlist: () => dispatch(fetchWatchlist()),
  addStockToWatchlist: stock => dispatch(addStockToWatchlist(stock)),
  removeStockFromWatchlist: stock => dispatch(removeStockFromWatchlist(stock)),
  deleteStockPrices: range => dispatch(deleteStockPrices(range)),
  fetchStockPrices: {
    '1Y': stock => dispatch(fetch1YStockPrices(stock)),
    '3M': stock => dispatch(fetch3MStockPrices(stock)),
    '1M': stock => dispatch(fetch1MStockPrices(stock)),
    '1W': stock => dispatch(fetch1WStockPrices(stock)),
    '1D': stock => dispatch(fetch1DStockPrices(stock)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);