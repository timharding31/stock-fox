import React from 'react';
import Loading from '../loading';
// import { useSelector } from 'react-redux';
import { formatPrice } from '../../util/data_handling_util';
import BuyForm from './buy_form';
import SellForm from './sell_form';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buySelected: "selected",
      sellSelected: "",
      buyForm: 'visible',
      sellOption: false,
      sellForm: 'invisible',
    }
    this.baseState={ ...this.state };
    this.changeSelection = this.changeSelection.bind(this);
    this.refreshOrderForm = this.refreshOrderForm.bind(this);
  }

  componentDidMount() {
    this.setState({ sellOption: Boolean(this.props.portfolio.allSymbols.includes(this.props.params.symbol)) })
  }

  componentDidUpdate(prevProps) {
    // if (this.props.)
    if ((this.props.portfolio.allSymbols.length != prevProps.portfolio.allSymbols.length) ||
      (this.props.params.symbol != prevProps.params.symbol)) {
      this.setState({ sellOption: Boolean(this.props.portfolio.allSymbols.includes(this.props.params.symbol)) });
    }
  }

  changeSelection(e) {
    e.preventDefault()
    if (e.currentTarget.value === "buy") {
      this.setState({
        buySelected: "selected",
        sellSelected: "",
        buyForm: 'visible',
        sellOption: Boolean(this.props.portfolio.allSymbols.includes(this.props.params.symbol)),
        sellForm: 'invisible',
      });
    } else if (e.currentTarget.value === "sell") {
      this.setState({
        buySelected: "",
        sellSelected: "selected",
        buyForm: 'invisible',
        sellOption: Boolean(this.props.portfolio.allSymbols.includes(this.props.params.symbol)),
        sellForm: 'visible',
      });
    }
  }

  refreshOrderForm() {
    this.setState(this.baseState);
  }

  render() {
    if (!Boolean(this.props.stocks.summary.bySymbol[this.props.params.symbol])) {
      return (<Loading loading={!Boolean(this.props.stocks.summary.bySymbol[this.props.params.symbol])} compName={"order-form"} />)
    };
    const stock = this.props.stocks.summary.bySymbol[this.props.params.symbol];
    return (
      <div className="order-control">
        <ul className="order-form-header">
          <li id="order-action-buy" className={this.state.buySelected}>
            <button onClick={this.changeSelection} value="buy">
              {`Buy ${this.props.params.symbol}`}
            </button>
          </li>
          <li id="order-action-sell" className={`${this.state.sellSelected} ${this.state.sellOption ? "" : "invisible"}`}>
            <button onClick={this.changeSelection} value="sell">
              {`Sell ${this.props.params.symbol}`}
            </button>
          </li>
        </ul>
          <div id="buy-form" className={this.state.buyForm}>
            <BuyForm
              symbol={this.props.params.symbol}
              price={stock.price}
              buyingPower={this.props.currentUser.buying_power}
              action={this.props.buyStock}
              updateUserParams={this.props.updateUserParams}
              refreshOrderForm={this.refreshOrderForm}
            />
          </div>
          <div id="sell-form" className={this.state.sellForm}>
            <SellForm
              symbol={this.props.params.symbol}
              price={stock.price}
              portfolio={this.props.portfolio}
              action={this.props.sellStock}
              updateUserParams={this.props.updateUserParams}
              refreshOrderForm={this.refreshOrderForm}
            />
          </div>
      </div>
    )
  }
}







//   constructor(props) {
//     super(props);

//     this.state = {
//       variable: {
//         headerText: null,
//         action: props.buyStock,
//         estimate: 'Estimated Cost',
//         footerText: `${formatPrice(this.props.user.buying_power)} Buying Power Available`
//       },
//       order: 0,
//       'Estimated Cost': formatPrice(0),
//       'Estimated Credit': formatPrice(0),
//     };
//     this.baseState = { ...this.state };

//     this.handleButton = this.handleButton.bind(this);
//     this.changeVariableState = this.changeVariableState.bind(this);
//     this.updateOrder = this.updateOrder.bind(this);
//     this.buyState = this.buyState.bind(this);
//   }

//   buyState() {
//     return ({
//       headerText: `Buy ${this.props.params.symbol}`,
//       estimate: 'Estimated Cost',
//       action: this.props.buyStock,
//       footerText: `${formatPrice(this.props.user.buying_power)} Buying Power Available`
//     });
//   }

//   changeVariableState(e) {
//     e.preventDefault();
//     let sellState;
//     if (this.props.portfolio[this.props.params.symbol]) {
//       sellState = {
//         headerText: `Sell ${this.props.params.symbol}`,
//         action: this.props.sellStock,
//         estimate: 'Estimated Credit',
//         footerText: `${this.props.portfolio[this.props.params.symbol].amt} Shares Available`
//       };
//     }
//     if (e.currentTarget.value === 'buy') {
//       let buyEle = document.getElementById("order-action-buy")
//       buyEle.classList.add("selected")
//       let sellEle = document.getElementById("order-action-sell")
//       sellEle.classList.remove("selected")
//       this.setState({ variable: this.buyState() });
//     } else {
//       let buyEle = document.getElementById("order-action-buy")
//       buyEle.classList.remove("selected")
//       let sellEle = document.getElementById("order-action-sell")
//       sellEle.classList.add("selected")
//       this.setState({ variable: sellState });
//     }
//   }

//   updateOrder(e) {
//     e.preventDefault();
//     this.setState({
//       order: e.currentTarget.value,
//       'Estimated Credit': formatPrice(e.currentTarget.value * this.props.stock.price),
//       'Estimated Cost': formatPrice(e.currentTarget.value * this.props.stock.price),
//     });
//   }

//   componentDidMount() {
//     this.props.fetchSingleStock(this.props.stock.symbol);
//     this.props.fetchPortfolio();
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.params.symbol !== prevProps.params.symbol) {
//       this.props.fetchPortfolio();
//     }
//     if (this.props.user.buying_power != prevProps.user.buying_power) {
//       this.props.reloadUser(this.props.user);
//     }
//   }

//   handleButton(e) {
//     e.preventDefault();
//     this.state.variable.action(this.props.params.symbol, this.state.order);
//     this.setState(this.baseState);
//   }

//   render() {
//     if (!this.props.stock.price || this.props.loading.portfolio) {
//       return (<Loading loading={this.props.loading.portfolio} compName={"order-form"} />)
//     };
//     let orderOptionsList = [(<li id="order-action-buy" className="selected"><button target="_blank">{`Buy ${this.props.params.symbol}`}</button></li>)]
//     if (this.props.portfolio[this.props.params.symbol]) {
//       orderOptionsList = [
//         (<li id="order-action-buy" className="selected"><button onClick={this.changeVariableState} value="buy">{`Buy ${this.props.params.symbol}`}</button></li>),
//         (<li id="order-action-sell" className=""><button onClick={this.changeVariableState} value="sell">{`Sell ${this.props.params.symbol}`}</button></li>)]
//     }
//     return (
//       <div className="order-control">
//         <ul className="order-form-header">
//           {orderOptionsList}
//         </ul>
//         <form onSubmit={this.handleButton}>
//           <div className="order-form-row">
//           <label>Shares: 
//           <input type="text"
//             value={this.state.order}
//             onChange={this.updateOrder}/>
//           </label>
//           </div>
//           <div className="order-form-row">
//             <label>Market Price: 
//               <p>{formatPrice(this.props.stock.price)}</p>
//             </label>
//           </div>
//           <hr/>
//           <div className="order-form-row">
//             <label>{`${this.state.variable.estimate} :`}
//               <p>{this.state[this.state.variable.estimate]}</p>
//             </label>
//           </div>
//           <button type="submit">Complete Order</button>
//         </form>
//         <p className="order-form-footer">{this.state.variable.footerText}</p>
//       </div>
//     )
//   }
// }

export default OrderForm;