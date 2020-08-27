import React from 'react';
import PriceList from './price_list';


class SidebarModule extends React.Component {
  componentDidMount() {
    this.props.fetchWatchlist();
    this.props.fetchPortfolio();
  }

  render() {
    return (
      <div className="sidebar-modules">
        <PriceList
          entityName={"portfolio"}
          errors={this.props.errors.portfolio}
          entityData={this.props.portfolio}
          prices={this.props.prices['1D'].bySymbol}
          loading={this.props.loading.portfolio}
          stocks={this.props.stocks.summary.bySymbol}
        />
        <PriceList
          entityName={"watchlist"}
          errors={this.props.errors.watchlist}
          entityData={this.props.watchlist}
          prices={this.props.prices['1D'].bySymbol}
          loading={this.props.loading.watchlist}
          stocks={this.props.stocks.summary.bySymbol}
        />
      </div>
    )
  }
}

export default SidebarModule;


    // this.props.fetchWatchlist().then(() => this.setState({ loadingWatchlistPrices: false }));
    // this.props.fetchPortfolio().then(() => this.setState({ loadingPortfolioPrices: false }));
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

  // shouldComponentUpdate() {
  //   // return (!this.state.loadingWatchlistPrices || !this.state.loadingPortfolioPrices || !this.state.loadingStockSummaries)
  //   return ((!this.props.loading.watchlist) && (!this.props.loading.portfolio))
  // }

  // componentWillUnmount() {
  //   this.props.resetPortfolioErrors();
  //   this.props.resetWatchlistErrors();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.state.loadingStockSummaries) {
  //     if (!this.state.loadingPortfolioPrices && !this.state.loadingWatchlistPrices) {
  //       if (compareSymbols(this.props.stocks.summary.allSymbols, this.props.watchlist.allSymbols.concat(this.props.portfolio.allSymbols))) {
  //         this.setState({ loadingStockSummaries: false });
  //       }
  //     }
  //   }
  //   if (this.state.loadingPortfolioPrices && this.props.errors.portfolio) {
  //     this.setState({ loadingPortfolioPrices: false });
  //   }
  // }

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
      // if (this.state.loadingStockSummaries) {
    //   return (<Loading loading={this.state.loadingStockSummaries} compName="sidebar-modules" />)
    // }entityName, errors, entityData, prices, loading, stocks
    // return (
    //   <div className="sidebar-modules">
    //     <PortfolioModule
    //       loading={this.props.loading.portfolio}
    //       portfolio={this.props.portfolio}
    //       stocks={this.props.stocks.summary.bySymbol}
    //       prices={this.props.prices['1D'].bySymbol}
    //       errors={this.props.errors.portfolio}
    //       clearErrors={this.props.resetPortfolioErrors}
    //     />
    //     <WatchlistModule
    //       loading={this.props.loading.watchlist}
    //       watchlist={this.props.watchlist.allSymbols}
    //       stocks={this.props.stocks.summary.bySymbol}
    //       prices={this.props.prices['1D'].bySymbol}
    //       errors={this.props.errors.watchlist}
    //       clearErrors={this.props.resetWatchlistErrors}
    //     />
    //   </div>
    // );