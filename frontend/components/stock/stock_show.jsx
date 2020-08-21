import React from 'react';
import PriceChartWrapper from './price_chart_wrapper';
import StockNews from './stock_news';
import StockAboutSection from './stock_about_section';

class StockShow extends React.Component {

  componentDidMount() {
    this.props.fetchWatchlist();
    this.props.fetchSingleStock(this.props.match.params.symbol);
    this.props.fetchStockPrices['1D'](this.props.stock);
    this.props.fetchStockNews(this.props.stock);
    this.props.fetchStockDetail(this.props.stock);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stock.symbol !== prevProps.stock.symbol) {
      this.props.fetchStockPrices['1D'](this.props.stock);
      this.props.fetchStockNews(this.props.stock);
      this.props.fetchStockDetail(this.props.stock);
    }
  }

  render() {
    const {
      stock,
      watchlist,
      news } = this.props;
    if (!stock || !watchlist || !news) return null;
    return (
      <div className="stock-show-page">
        <PriceChartWrapper {...this.props} />
        <StockAboutSection stock={stock} fetchStockDetail={fetchStockDetail} />
        <StockNews news={news} />
      </div>
    )
  }
}

export default StockShow;