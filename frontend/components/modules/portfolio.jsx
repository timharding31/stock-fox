import React from 'react';
import MiniStockContainer from './mini_stock_container';
import Loading from '../loading';
import { compareArrays, formatPrice } from '../../util/data_handling_util';


class PortfolioModule extends React.Component {
  constructor(props) {
    super(props)

    // this.state = { loadingPrices: true, fetchCalled: false };
  }

  // componentDidMount() {
  //   if (this.props.loading.portfolio) {
  //     this.props.fetchPortfolio();
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (!this.props.loading.portfolio && this.state.loadingPrices) {
  //     if (!this.state.fetchCalled) {
  //       for (let symbol in this.props.portfolio.stocks) {
  //         this.props.fetchPrices(symbol);
  //       }
  //       this.setState({ fetchCalled: true });
  //     } else if (this.state.fetchCalled) {
  //       if (compareArrays(Object.keys(this.props.portfolio.stocks), Object.keys(this.props.portfolio.prices))) {
  //         this.setState({ loadingPrices: false });
  //       }
  //     }
  //   }
  // }


  render() {
    if (this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"portfolio-module"} />)
    }
    let portfolioCharts = [];
    for (let symbol of this.props.portfolio.allSymbols) {
      portfolioCharts.push(
        <MiniStockContainer
          key={`portfolio-chart-${symbol}`}
          symbol={symbol}
          amt={this.props.portfolio.bySymbol[symbol].amt}
          prices={this.props.prices}
          price={formatPrice(this.props.stocks[symbol].price)}
        />)
    }
    return (
      <div className="portfolio-module">
        <h4>Portfolio</h4>
        <ul className="portfolio-charts">
          {portfolioCharts}
        </ul>
      </div>
    );
  }
}

export default PortfolioModule;