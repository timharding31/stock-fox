import React from 'react';
import PriceChart from './price_chart';

class PriceChartWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { range: '1D' }
    this.updateRange = this.updateRange.bind(this);
  }

  updateRange(e) {
    e.preventDefault();
    this.setState({ range: e.currentTarget.value })
  }

  componentWillUnmount() {
    this.props.deleteStockPrices();
  }

  render() {
    return(
      <div>
        <div className="price-chart-header"></div>
        <PriceChart range={this.state.range} {...this.props} />
        <ul className="range-options">
          <button onClick={this.updateRange} value="1D">1D</button>
          <button onClick={this.updateRange} value="1W">1W</button>
          <button onClick={this.updateRange} value="1M">1M</button>
          <button onClick={this.updateRange} value="3M">3M</button>
          <button onClick={this.updateRange} value="1Y">1Y</button>
          <button onClick={this.updateRange} value="5Y">5Y</button>
          <button onClick={this.updateRange} value="MAX">MAX</button>
        </ul>
      </div>
    )
  }

}

export default PriceChartWrapper;