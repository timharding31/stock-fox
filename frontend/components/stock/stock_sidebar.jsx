import React from 'react';

class StockSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.removeState = {
      text: 'Remove from Watchlist',
      action: props.removeStockFromWatchlist
    };
    this.addState = {
      text: 'Add to Watchlist',
      action: props.addStockToWatchlist
    };

    this.state = { button: null };

    this.handleButton = this.handleButton.bind(this);
  }

  checkButtonState() {
    if (this.props.watchlist.includes(this.props.stock.symbol)) {
      this.setState({ button: this.removeState });
    } else {
      this.setState({ button: this.addState });
    }
  }

  componentDidMount() {
    this.props.fetchSingleStock(this.props.stock.symbol);
    this.props.fetchWatchlist();
  }

  componentDidUpdate(prevProps) {
    if (this.props.watchlist !== prevProps.watchlist) {
      this.checkButtonState();
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.state.button.action(this.props.stock);
  }

  render() {
    if (!this.state.button) return null;
    return (
      <div className="stock-show-page-sidebar">
        <button class="add-to-watchlist" onClick={this.handleButton}>{this.state.button.text}</button>
      </div>
    )
  }
}

export default StockSidebar;