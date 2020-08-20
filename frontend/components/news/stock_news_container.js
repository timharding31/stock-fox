import { getSingleStock } from '../../actions/asset_actions';
import { getStockNews } from '../../actions/news_actions';
import { connect } from 'react-redux';
import StockNews from './stock_news';

const mapStateToProps = ({ entities : { stocks, news } }, { match: { params }}) => ({
  stock: stocks[params.symbol],
  news
});

const mapDispatchToProps = dispatch => ({
  getStockNews: stock => dispatch(getStockNews(stock)),
  getSingleStock: symbol => dispatch(getSingleStock(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockNews);