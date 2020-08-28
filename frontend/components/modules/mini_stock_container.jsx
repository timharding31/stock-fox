import React from 'react'
import MiniPriceChart from './mini_price_chart';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import { formatPrice } from '../../util/data_handling_util';

export default ({ symbol, stock, amt, prices }) => {
  if (prices[symbol] && stock) {
    let data = prices[symbol]
    let price = formatPrice(stock.price);
    let color = (prices[symbol][0].price > prices[symbol][prices[symbol].length - 1].price) ? '#ED5D2A' : '#5bc43b';
    return (<li className="mini-stock-container" key={`mini-${symbol}-${amt}`}>
      <Link to={`/stocks/${symbol}`}>
        <div className="mini-symbol"><p>{symbol}</p><p className="share-amt">{(amt) ? `${amt} shares` : ''}</p></div>
        <MiniPriceChart data={data} color={color} />
        <div className="mini-price"><p>{price}</p></div>
      </Link>
    </li>
    )
  } else {
    return (<Loading loading={Boolean(!prices[symbol])} />)
  }
}