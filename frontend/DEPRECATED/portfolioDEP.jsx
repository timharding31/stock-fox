import React from 'react';
import MiniStockContainer from './mini_stock_container';
import Loading from '../loading';
import { compareArrays, formatPrice } from '../../util/data_handling_util';


class PortfolioModule extends React.Component {

  render() {
    // if (this.props.loading && this.props.errors.length === 0) {
    //   return (<Loading loading={this.props.loading} compName={"portfolio-module"} />)
    // }
    if (this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"portfolio-module"} />)
    }
    let portfolioListItems = [];
    if (this.props.portfolio.allSymbols.length > 0 && Object.entries(this.props.prices).length > 0) {
      for (let symbol of this.props.portfolio.allSymbols) {
        portfolioListItems.push(
          <MiniStockContainer
            key={`portfolio-chart-${symbol}`}
            symbol={symbol}
            amt={this.props.portfolio.bySymbol[symbol].amt}
            prices={this.props.prices}
            stock={this.props.stocks[symbol]}
          />)
      }
    } else if (this.props.errors.length > 0) {
      portfolioListItems.push(this.props.errors.map((error, idx) => (<li className="portfolio-errors" key={`error-${idx}`}>{error}</li>)));
    }
    // if (this.props.errors) {
    //   return (<ul>{this.props.errors.map((error, idx) => (<li key={`error-${idx}`}>{error}</li>))}</ul>)
    // }
    // let portfolioCharts = [];
    // if (this.props.errors.length) {
    //   portfolioCharts.push(this.props.errors.map((error, idx) => (<li className="portfolio-errors" key={`error-${idx}`}>{error}</li>)));
    // } else {
    //   for (let symbol of this.props.portfolio.allSymbols) {
    //     portfolioCharts.push(
    //       <MiniStockContainer
    //       key={`portfolio-chart-${symbol}`}
    //       symbol={symbol}
    //       amt={this.props.portfolio.bySymbol[symbol].amt}
    //       prices={this.props.prices}
    //       stock={this.props.stocks[symbol]}
    //       />)
    //   }
    // }
    return (
      <div className="portfolio-module">
        <h4>Portfolio</h4>
        <ul className="portfolio-charts">
          {portfolioListItems}
        </ul>
      </div>
    );
  }
}

export default PortfolioModule;