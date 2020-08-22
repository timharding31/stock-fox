import React from 'react'
import MiniPriceChart from './mini_price_chart';
import { Link } from 'react-router-dom';

export default ({ symbol, data, price, color }) => (
  <li className="mini-stock-container" key={`mini-${symbol}`}>
    <Link to={`/stocks/${symbol}`}>
      <div className="mini-symbol"><p>{symbol}</p></div>
      <MiniPriceChart data={data} color={color} />
      <div className="mini-price"><p>{price}</p></div>
    </Link>
  </li>
)