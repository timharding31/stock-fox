import React from 'react';
import { Sparklines } from 'react-sparklines';
import PriceChartTiny from './price_chart_tiny';
import Loading from '../loading';

class WatchlistModule extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loadingPrices: true };
  }

  componentDidMount() {
    if (this.props.loading.watchlist) {
      this.props.fetchWatchlist();
    }
  }
  componentDidUpdate() {
    for (let symb in this.props.watchlist.stocks) {
      if (!this.props.watchlist.prices[symb]) {
        this.setState({ loadingPrices: true });
        this.props.fetchPrices(symb);
      }
    }
    if (!this.props.loading.watchlist) {
      if (Object.keys(this.props.watchlist.stocks) === Object.keys(this.props.watchlist.prices)) {
        this.setState({ loadingPrices: false });
      }
    }
  }


  render() {
    if (this.state.loadingPrices) {
      return (<Loading loading={this.state.loadingPrices} compName={"watchlist-module"} />)
    }
    let sparkLines;
    for (let symb in this.props.watchlist.prices) {
      sparkLines[symb] = <PriceChartTiny symbol={symbol} data={this.props.watchlist.prices[symb]} />
    }
    return null;
  }
}

export default WatchlistModule;