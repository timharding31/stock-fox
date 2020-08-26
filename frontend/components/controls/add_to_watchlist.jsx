import React from 'react';
import Loading from '../loading';

class AddToWatchlist extends React.Component {
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
    if (this.props.watchlist.allSymbols.includes(this.props.params.symbol)) {
      this.setState({ button: this.removeState });
    } else {
      this.setState({ button: this.addState });
    }
  }

  componentDidMount() {
    if (!this.props.stocks.summary.bySymbol[this.props.params.symbol]) this.props.fetchSingleStock(this.props.params.symbol);
    if (this.props.loading) this.props.fetchWatchlist();
    this.checkButtonState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.symbol != prevProps.params.symbol) {
      this.checkButtonState();
    }
    if (this.props.watchlist !== prevProps.watchlist) {
      this.checkButtonState();
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.state.button.action(this.props.params.symbol);
  }

  render() {
    if (!this.state.button) {
      return (<Loading loading={this.props.loading} compName={"watchlist"} />)
    };
    return (
      <div className="watchlist-control">
        <button className="add-to-watchlist" onClick={this.handleButton}>{this.state.button.text}</button>
      </div>
    )
  }
}

export default AddToWatchlist;