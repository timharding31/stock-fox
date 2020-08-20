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

class StockShow extends React.Component {
  componentDidMount() {
    this.props.fetchWatchlist();
    this.props.fetchSingleStock(this.props.match.params.symbol);
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.stock !== prevProps.stock) {
      this.props.fetchStockPrices['1D'](this.props.stock);
    }
  }

  render() {
    const { stock, addStockToWatchlist } = this.props;
    if (!this.props.stock || !this.props.watchlist) return null;
    return (
      <div className="stock-show-page">
        <div className="stock-show-page-content">
          <PriceChartWrapper {...this.props} />
        </div>
        <div className="stock-show-page-sidebar">
          <StockSideBar {...this.props} />
        </div>
      </div>
    )
  }
}

export default StockShow;