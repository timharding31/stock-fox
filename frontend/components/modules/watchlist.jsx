import React from 'react';
import MiniStockContainer from './mini_stock_container';
import Loading from '../loading';
import { compareArrays, formatPrice } from '../../util/data_handling_util';


class WatchlistModule extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    if (this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"watchlist-module"} />)
    }
    let watchlistCharts = [];
    for (let symbol of this.props.watchlist) {
      watchlistCharts.push(
        <MiniStockContainer
          key={`watchlist-chart-${symbol}`}
          symbol={symbol}
          prices={this.props.prices}
          price={formatPrice(this.props.stocks[symbol].price)}
        />)
    }
    return (
      <div className="watchlist-module">
      <h4>Watchlist</h4>
      <ul className="watchlist-charts">
        {watchlistCharts}
      </ul>
      </div>
    );
  }
}

export default WatchlistModule;