import React from 'react';
import WatchlistModule from './watchlist';
import PortfolioModule from './portfolio';
import Loading from '../loading';
import { compareSymbols, compareArrays } from '../../util/data_handling_util';


class SidebarModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingWatchlistPrices: true,
      loadingPortfolioPrices: true,
      loadingStockSummaries: true,
     }
  }

  componentDidMount() {
    this.props.fetchWatchlist().then(() => this.setState({ loadingWatchlistPrices: false }));
    this.props.fetchPortfolio().then(() => this.setState({ loadingPortfolioPrices: false }));
    // if (this.props.watchlist.allSymbols > 0) {
    //   for (let symbol of this.props.watchlist.allSymbols) {
    //     this.props.fetch1DStockPrices(symbol);
    //   }
    //   this.setState({ watchlistPricesCalled: true });
    // }
    // if (this.props.portfolio.allSymbols.length > 0) {
    //   for (let symbol of this.props.portfolio.allSymbols) {
    //     this.props.fetch1DStockPrices(symbol);
    //   }
    //   this.setState({ portfolioPricesCalled: true });
    // }
  }

  shouldComponentUpdate() {
    // return (!this.state.loadingWatchlistPrices || !this.state.loadingPortfolioPrices || !this.state.loadingStockSummaries)
    return ((!this.props.loading.watchlist) && (!this.props.loading.portfolio))
  }

  componentWillUnmount() {
    this.props.deleteStockPrices();
    this.props.resetPortfolioErrors();
    this.props.resetWatchlistErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.state.loadingStockSummaries) {
      if (!this.state.loadingPortfolioPrices && !this.state.loadingWatchlistPrices) {
        if (compareSymbols(this.props.stocks.summary.allSymbols, this.props.watchlist.allSymbols.concat(this.props.portfolio.allSymbols))) {
          this.setState({ loadingStockSummaries: false });
        }
      }
    }
    if (this.state.loadingPortfolioPrices && this.props.errors.portfolio) {
      this.setState({ loadingPortfolioPrices: false });
    }
  }

  // componentDidUpdate() {
  //   // if (!this.props.loading.singleStock) {
  //   //   if (this.state.loadingStocks && this.props.stocks.summary.allSymbols.length > 0) {
  //   //     if (this.props.portfolio.allSymbols.concat(this.props.watchlist.allSymbols).length === this.props.stocks.summary.allSymbols) {
  //   //       this.setState({ loadingStocks: false });
  //   //     }
  //   //   }
  //   // }
  //   if (!this.props.loading.watchlist) {
  //     if (!this.state.watchlistPricesCalled && this.props.watchlist.allSymbols.length > 0) {
  //       for (let symbol of this.props.watchlist.allSymbols) {
  //         this.props.fetch1DStockPrices(symbol);
  //       }
  //       this.setState({ watchlistPricesCalled: true });
  //     }
  //     if (this.state.loadingWatchlistPrices && this.state.watchlistPricesCalled && this.props.prices['1D'].allSymbols.length > 0) {
  //       if (compareSymbols(this.props.prices['1D'].allSymbols, this.props.watchlist.allSymbols)) {
  //         this.setState({ loadingWatchlistPrices: false });
  //       }
  //     }
  //   }
  //   if (!this.props.loading.portfolio) {
  //     if (!this.state.portfolioPricesCalled && this.props.portfolio.allSymbols.length > 0) {
  //       for (let symbol of this.props.portfolio.allSymbols) {
  //         this.props.fetch1DStockPrices(symbol);
  //       }
  //       this.setState({ portfolioPricesCalled: true });
  //     }
  //     if (this.state.loadingPortfolioPrices && this.state.portfolioPricesCalled && this.props.prices['1D'].allSymbols.length > 0) {
  //       if (compareSymbols(this.props.prices['1D'].allSymbols, this.props.portfolio.allSymbols)) {
  //         this.setState({ loadingPortfolioPrices: false });
  //       }
  //     }
  //   }
  // }


  render() {
    if (this.state.loadingStockSummaries) {
      return (<Loading loading={this.state.loadingStockSummaries} compName="sidebar-modules" />)
    }
    return (
      <div className="sidebar-modules">
        <PortfolioModule
          loading={this.state.loadingPortfolioPrices || this.state.loadingStockSummaries}
          portfolio={this.props.portfolio}
          stocks={this.props.stocks.summary.bySymbol}
          prices={this.props.prices['1D'].bySymbol}
          errors={this.props.errors.portfolio}
          clearErrors={this.props.resetPortfolioErrors}
        />
        <WatchlistModule
          loading={this.state.loadingWatchlistPrices || this.state.loadingStockSummaries}
          watchlist={this.props.watchlist.allSymbols}
          stocks={this.props.stocks.summary.bySymbol}
          prices={this.props.prices['1D'].bySymbol}
          errors={this.props.errors.watchlist}
          clearErrors={this.props.resetWatchlistErrors}
        />
      </div>
    );
  }
}

export default SidebarModule;