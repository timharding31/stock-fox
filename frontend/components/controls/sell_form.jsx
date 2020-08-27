import React from 'react';
import { formatPrice } from '../../util/data_handling_util';
import Loading from '../loading';

class SellForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { order: '' };
    this.baseState = { ...this.state };
    this.updateOrder = this.updateOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateOrder(e) {
    e.preventDefault();
    this.setState({ order: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.props.symbol, this.state.order).then(() => this.props.updateUserParams());
    this.setState(this.baseState);
    this.props.refreshOrderForm();
  }

  render() {
    if (!Boolean(this.props.portfolio.bySymbol[this.props.symbol])) {
      return (<Loading loading={!Boolean(this.props.portfolio.bySymbol[this.props.symbol])} compName="sell-form" />)
    }
    return (
      <form onSubmit={this.handleSubmit} className="order-form">
        <div className="order-form-row">
          <label>
            <p>Shares:</p>
            <input type="text"
              value={this.state.order}
              placeholder="0.0"
              onChange={this.updateOrder} />
          </label>
        </div>
        <div className="order-form-row">
          <label>
            <p>Market Price:</p>
            <p>{formatPrice(this.props.price)}</p>
          </label>
        </div>
        <hr />
        <div className="order-form-row">
          <label>
            <p>Estimated Credit:</p>
            <p>{formatPrice(this.state.order * this.props.price)}</p>
          </label>
        </div>
        <button type="submit">Complete Order</button>
        <p className="order-form-footer">{`${this.props.portfolio.bySymbol[this.props.symbol].amt} Shares Available`}</p>
      </form>
    )
  }
}

export default SellForm;