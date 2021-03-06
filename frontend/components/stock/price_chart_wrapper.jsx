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
    const btnList = Array.from(document.getElementsByClassName('range-button'));
    btnList.forEach(btn => {
      if (Array.from(btn.classList).includes('selected')) btn.classList.remove('selected');
    });
    e.currentTarget.classList.add('selected');
  }

  render() {
    return(
      <div className="price-chart-component">
        <div className="price-chart-header"></div>
        <PriceChart range={this.state.range} {...this.props} stock={this.props.stocks.summary.bySymbol[this.props.params.symbol]} />
        <ul className="range-options">
          <li><button className="range-button selected" onClick={this.updateRange} value="1D">1D</button></li>
          <li><button className="range-button" onClick={this.updateRange} value="1W">1W</button></li>
          <li><button className="range-button" onClick={this.updateRange} value="1M">1M</button></li>
          <li><button className="range-button" onClick={this.updateRange} value="3M">3M</button></li>
          <li><button className="range-button" onClick={this.updateRange} value="1Y">1Y</button></li>
        </ul>
      </div>
    )
  }

}

export default PriceChartWrapper;