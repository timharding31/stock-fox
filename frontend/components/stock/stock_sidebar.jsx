import React from 'react';

class StockSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.removeBtn = {
      text: 'Remove from Watchlist',
      action: props.removeStockFromWatchlist
    };
    this.addBtn = {
      text: 'Add to Watchlist',
      action: props.addStockToWatchlist
    };

    this.state = { button: {} };

    this.handleButton = this.handleButton.bind(this);
  }

  checkButtonState() {
    if (this.props.watchlist.includes(this.props.stock.symbol)) {
      this.setState({ button: this.removeBtn });
    } else {
      this.setState({ button: this.addBtn });
    }
  }

  componentDidMount() {
    this.checkButtonState();
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
    if (this.state.button === {}) return null;
    return (
      <div className="stock-show-page-sidebar">
        <button onClick={this.handleButton}>{this.state.button.text}</button>
      </div>
    )
  }
}

export default StockSideBar;