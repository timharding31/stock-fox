import React from 'react';
import Loading from '../loading';
import { formatPrice } from '../../util/data_handling_util';

class UpdateBuyingPower extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customAmt: '' };
    this.baseState = { ...this.state };
    this.updatePower = this.updatePower.bind(this);
    this.setCustom = this.setCustom.bind(this);
  }
  updatePower(e) {
    e.preventDefault();
    this.props.addFunds(e.currentTarget.value);
    this.setState(this.baseState);
  }
  setCustom(e) {
    e.preventDefault();
    this.setState({ customAmt: e.currentTarget.value })
  }
  render() {
    return(
      <div className="buying-power">
        <h2>Add funds to buy stocks on StockFox</h2>
        <ul>
          <li><button className="funding-option" onClick={this.updatePower} value="10">$10</button></li>
          <li><button className="funding-option" onClick={this.updatePower} value="100">$100</button></li>
          <li><button className="funding-option" onClick={this.updatePower} value="1000">$1,000</button></li>
          <li><button className="funding-option" onClick={this.updatePower} value="10000">$10,000</button></li>
          <li>
            <div className="custom-amt">
              <input className="custom-amt-input" type="text" onChange={this.setCustom} placeholder="Custom" />
            <button className="custom-amt-button" onClick={this.updatePower} value={this.state.customAmt}>{`Add ${formatPrice(this.state.customAmt)}`}</button>
            </div>
          </li>
        </ul>
        <span>Your current Buying Power is: <p className="power-amt">{formatPrice(this.props.buyingPower)}</p></span>
      </div>
    )
  }
}

export default UpdateBuyingPower;