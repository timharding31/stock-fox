import React from 'react';
import MiniStockContainer from './mini_stock_container';
import Loading from '../loading';
import { compareArrays, formatPrice } from '../../util/data_handling_util';


class WatchlistModule extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loadingPrices: true, fetchCalled: false };
  }

  componentDidMount() {
    if (this.props.loading.watchlist) {
      this.props.fetchWatchlist();
    }
  }
  componentDidUpdate(prevProps) {
    if (!this.props.loading.watchlist && this.state.loadingPrices) {
      if (!this.state.fetchCalled) {
        for (let symb of this.props.watchlist.stocks) {
          this.props.fetchPrices(symb);
        }
        this.setState({ fetchCalled: true });
      } else if (this.state.fetchCalled) {
        if (compareArrays(this.props.watchlist.stocks, Object.keys(this.props.watchlist.prices))) {
          this.setState({ loadingPrices: false });
        }
      }
    }
  }


  render() {
    if (this.state.loadingPrices) {
      return (<Loading loading={this.state.loadingPrices} compName={"watchlist-module"} />)
    }
    let modulesList = [];
    for (let symb of this.props.watchlist.stocks) {
      let color = (this.props.watchlist.prices[symb][0].price > this.props.watchlist.prices[symb][this.props.watchlist.prices[symb].length - 1].price) ? '#ED5D2A' : '#5bc43b';
      modulesList.push(
        <MiniStockContainer
          symbol={symb}
          data={this.props.watchlist.prices[symb]}
          price={formatPrice(this.props.stocks[symb].price)}
          color={color}
        />
        // <li className="mini-stock-container" key={`mini-${symb}`}>
        //   <Link to={`/stocks/${symb}`}>
        //     <div className="mini-symbol"><p>{symb}</p></div>
        //     <PriceChartMini data={this.props.watchlist.prices[symb]} color={color} />
        //     <div className="mini-price"><p>{formatPrice(this.props.stocks[symb].price)}</p></div>
        //   </Link>
        // </li>
      )
    }
    return (
      <div className="watchlist-module">
      <h4>Watchlist</h4>
      <ul className="watchlist-charts">
        {modulesList}
      </ul>
      </div>
    );
  }
}

export default WatchlistModule;