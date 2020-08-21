// components:
  // stock actions
  // collection banner
  // price chart
  // stock information
  // collection banner full
  // stock news
  // earnings?

import React from 'react';
import StockSideBar from './stock_sidebar';
import PriceChartWrapper from './price_chart_wrapper';
import StockNews from './stock_news';
import StockAboutSection from './stock_about_section';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiCalls: 0 }
  }
  componentDidMount() {
    this.props.fetchWatchlist();
    this.props.fetchSingleStock(this.props.match.params.symbol);
    this.props.fetchStockPrices['1D'](this.props.stock);
    this.props.fetchStockNews(this.props.stock);
    this.props.fetchStockDetail(this.props.stock);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stock.ceo !== prevProps.stock.ceo) {
      this.props.fetchStockPrices['1D'](this.props.stock);
      this.props.fetchStockNews(this.props.stock);
      this.props.fetchStockDetail(this.props.stock);
    }
  }

  render() {
    const { stock, addStockToWatchlist } = this.props;
    if (!this.props.stock || !this.props.watchlist || !this.props.news) return null;
    return (
      <div className="stock-show-page">
        <div className="stock-show-page-content">
          <PriceChartWrapper {...this.props} />
          <h3>About</h3>
          <StockAboutSection stock={this.props.stock} fetchStockDetail={this.props.fetchStockDetail} />
          <StockNews news={this.props.news} />
        </div>
        <div className="stock-show-page-sidebar">
          <StockSideBar {...this.props} />
        </div>
      </div>
    )
  }
}

export default StockShow;