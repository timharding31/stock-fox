import React from 'react';
import AddToWatchlist from './add_to_watchlist';
import OrderForm from './order_form';


class StockControls extends React.Component {


  render() {
    return (
      <div className="stock-controls">
        <OrderForm {...this.props} />
        <AddToWatchlist
          loading={this.props.loading.watchlist}
          stocks={this.props.stocks}
          removeStockFromWatchlist={this.props.removeStockFromWatchlist}
          addStockToWatchlist={this.props.addStockToWatchlist}
          watchlist={this.props.watchlist}
          fetchSingleStock={this.props.fetchSingleStock}
          params={this.props.params}
          fetchWatchlist={this.props.fetchWatchlist}
        />
      </div>
    )
  }
}

export default StockControls;