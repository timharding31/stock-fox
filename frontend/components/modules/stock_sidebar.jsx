import React from 'react';
import Loading from '../loading';

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
    if (!this.props.loading) {
      if (this.props.watchlist.includes(this.props.stock.symbol)) {
        this.setState({ button: this.removeState });
      } else {
        this.setState({ button: this.addState });
      }
    }
  }

  componentDidMount() {
    this.props.fetchSingleStock(this.props.stock.symbol);
    this.props.fetchWatchlist();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.watchlist !== prevProps.watchlist) || 
      (this.props.match.params.symbol !== prevProps.match.params.symbol)) {
      this.checkButtonState();
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.state.button.action(this.props.stock);
  }

  render() {
    if (!this.state.button || this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"watchlist"} />)
    };
    return (
      <div className="stock-show-page-sidebar">
        <button className="add-to-watchlist" onClick={this.handleButton}>{this.state.button.text}</button>
      </div>
    )
  }
}

export default StockSidebar;