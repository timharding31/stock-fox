import React from 'react';
import MiniStockContainer from './mini_stock_container';
import Loading from '../loading';
import { compareArrays, formatPrice } from '../../util/data_handling_util';


class PortfolioModule extends React.Component {
  constructor(props) {
    super(props)

    // this.state = { loadingPrices: true, fetchCalled: false };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  render() {
    if (this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"portfolio-module"} />)
    }
    let portfolioCharts = [];
    if (this.props.errors.length === 0) {
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
    } else {
      portfolioCharts = this.props.errors.map((error, idx) => (<li key={`error-${idx}`}>{error}</li>));
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