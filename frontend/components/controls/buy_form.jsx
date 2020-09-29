import React from 'react';
import { formatPrice } from '../../util/data_handling_util';

class BuyForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { order: '' };
    this.baseState = { ...this.state };
    this.updateOrder = this.updateOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateOrder(e) {
    e.preventDefault();
    let value = (e.currentTarget.value >= 0) ? e.currentTarget.value : 0
    this.setState({ order: value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.props.symbol, this.state.order).then(() => this.props.updateUserParams());
    this.setState(this.baseState);
    this.props.refreshOrderForm();
  }

  render() {
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
            <p>Estimated Cost:</p>
            <p>{formatPrice(this.state.order * this.props.price)}</p>
          </label>
        </div>
        <button type="submit">Complete Order</button>
        <p className="order-form-footer">{`${formatPrice(this.props.buyingPower)} Buying Power Available`}</p>
      </form>
    )
  }
}

export default BuyForm;