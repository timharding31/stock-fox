import React from 'react';
import PriceChartWrapper from './price_chart_wrapper';
import StockNews from './stock_news';
import StockAboutSection from './stock_about_section';
import Loading from '../loading';

class StockShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryLoading: true,
      detailLoading: true,
      newsLoading: true,
      oneDayPricesLoading: true,
    }
    this.baseState = { ...this.state };
  }
  componentDidMount() {
    // if (this.props.loading.watchlist) this.props.fetchWatchlist();
    if (!this.props.stocks.summary.allSymbols.includes(this.props.params.symbol)) this.props.fetchSingleStock(this.props.params.symbol);
    if (!this.props.prices['1D'].allSymbols.includes(this.props.params.symbol)) this.props.fetchStockPrices['1D'](this.props.params.symbol);
    if (!this.props.stocks.detail.allSymbols.includes(this.props.params.symbol)) this.props.fetchStockDetail(this.props.params.symbol);
    if (this.props.stocks.summary.bySymbol[this.props.params.symbol]) this.props.fetchStockNews(this.props.stocks.summary.bySymbol[this.props.params.symbol]);
  }

  componentDidUpdate(prevProps) {
    // if (this.props.stock.symbol !== prevProps.stock.symbol) {
    //   this.props.fetchStockPrices['1D'](this.props.stock);
    // }
    if (this.props.params.symbol !== prevProps.params.symbol) {
      // this.props.reload();
      this.setState(this.baseState);
      if (!this.props.stocks.summary.allSymbols.includes(this.props.params.symbol)) this.props.fetchSingleStock(this.props.params.symbol);
      if (!this.props.prices['1D'].allSymbols.includes(this.props.params.symbol)) this.props.fetchStockPrices['1D'](this.props.params.symbol);
      if (!this.props.stocks.detail.allSymbols.includes(this.props.params.symbol)) this.props.fetchStockDetail(this.props.params.symbol);
    }
    if (this.state.newsLoading) {
      if (!this.props.news[this.props.params.symbol] && !this.state.summaryLoading) {
        this.setState({ newsLoading: false })
        this.props.fetchStockNews(this.props.stocks.summary.bySymbol[this.props.params.symbol]);
      }
    }
    if (this.state.summaryLoading) {
      if (this.props.stocks.summary.allSymbols.includes(this.props.params.symbol)) {
        this.setState({ summaryLoading: false });
      }
    } else if (this.state.detailLoading) {
      if (this.props.stocks.detail.allSymbols.includes(this.props.params.symbol)) {
        this.setState({ detailLoading: false });
      }
    } else if (this.state.oneDayPricesLoading) {
      if (this.props.prices['1D'].allSymbols.includes(this.props.params.symbol)) {
        this.setState({ oneDayPricesLoading: false });
      }
    }
  }
  // componentWillUnmount() {
    // this.props.reload();
    // this.props.deleteStockPrices();
    // else if(this.state.newsLoading) {
    // if (this.props.news[this.props.params.symbol]) {
    //   this.setState({ newsLoading: false });
    // } else if (!this.state.summaryLoading) {
    //   this.props.fetchStockNews(this.props.stocks.summary.bySymbol[this.props.params.symbol]);
    // }
  // }

  render() {
    // const { stock, news } = this.props;
    if (this.state.summaryLoading || !this.props.news.byTopic[this.props.params.symbol]) {
      return (<Loading compName={'stock-show'} loading={this.state.summaryLoading || !this.props.news[this.props.params.symbol]} />)
    };
    return (
      <div className="stock-show-page">
        <PriceChartWrapper {...this.props} />
        <StockAboutSection
          stock={this.props.stocks[this.props.params.symbol]}
          stocks={this.props.stocks}
          params={this.props.params}
          fetchStockDetail={this.props.fetchStockDetail}
          loading={this.state.detailLoading}
        />
        <StockNews
          stock={this.props.stocks.summary.bySymbol[this.props.params.symbol]}
          params={this.props.params}
          fetchStockNews={this.props.fetchStockNews}
          news={this.props.news.byTopic[this.props.params.symbol]}
          loading={this.state.newsLoading}
          />
      </div>
    )
  }
}

export default StockShow;