import React from 'react';
import PriceChartWrapper from './price_chart_wrapper';
import StockNews from './stock_news';
import StockAboutSection from './stock_about_section';
import Loading from '../loading';

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
    if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
      this.props.reload();
      this.props.fetchSingleStock(this.props.match.params.symbol);
      this.props.deleteStockPrices();
    }
  }

  componentWillUnmount() {
    this.props.reload();
    this.props.deleteStockPrices();
  }

  render() {
    const {
      stock,
      watchlist,
      news } = this.props;
    if (this.props.loading.singleStock) {
      return (<Loading compName={'stock-show'} loading={this.props.loading.singleStock} />)
    };
    return (
      <div className="stock-show-page">
        <PriceChartWrapper {...this.props} />
        <StockAboutSection
          stock={stock}
          match={this.props.match}
          fetchStockDetail={fetchStockDetail}
          loading={this.props.loading.stockDetails}
        />
        <StockNews news={news} loading={this.props.loading.news} />
      </div>
    )
  }
}

export default StockShow;