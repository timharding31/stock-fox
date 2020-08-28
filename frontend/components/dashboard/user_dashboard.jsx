import React from 'react';
import Loading from '../loading';
import UpdateBuyingPower from './update_buying_power';
import ExploreStocks from './explore_stocks';

class UserDashboard extends React.Component {
  componentDidMount() {
    this.props.updateUserParams();
    if (this.props.loading.portfolio) this.props.fetchPortfolio();
    if (this.props.loading.watchlist) this.props.fetchWatchlist();
  }

  render() {
    if (this.props.loading.watchlist) {
      return (<Loading loading={this.props.loading.watchlist} compName={"user-dashboard"} />)
    }
    const { currentUser } = this.props;
    const salutation = currentUser.first_name ? `${currentUser.first_name} ${currentUser.last_name}` : currentUser.username;
    return (
    <div className="user-dashboard">
      <h1 className="greeting">Welcome, {salutation}</h1>
      <UpdateBuyingPower
        buyingPower={this.props.currentUser.buying_power}
        addFunds={(amt) => this.props.addFunds(currentUser.id, amt)}
        updateUserParams={this.props.updateUserParams}
      />
      <ExploreStocks
        watchlist={this.props.watchlist}
        fetchWatchlist={this.props.fetchWatchlist}
        addStockToWatchlist={this.props.addStockToWatchlist}
        fetchStocksBySector={this.props.fetchStocksBySector}
        sectorData={this.props.stocks.sectors}
        stockData={this.props.stocks.summary}
      />
    </div>
    )
  }

}

export default UserDashboard;


///{"Finance"=>1120,
// "Health Care"=> 914,
// "Consumer Services"=> 778,
// "Technology"=> 627,
// "Capital Goods"=> 356,
// "Basic Industries"=> 252,
// "Public Utilities"=> 245,
// "Energy"=> 225,
// "Consumer Non-Durables"=> 208,
// "Miscellaneous"=> 143,
// "Consumer Durables"=> 140,
// "Transportation"=> 110

// ["Finance", "Health Care", "Consumer Services", "Technology", ]