import { Link } from 'react-router-dom';
import React from 'react';

export default ({ symbol, name }) => (
  <li className="single-search-result" key={`result-${symbol}`}>
    <Link to={`/stocks/${symbol}`} className="search-result-link">
      <div className="search-result-symbol"><p>{symbol}</p></div>
      <div className="search-result-name"><p>{name.substring(0, 20) + (name.length > 20 ? " ..." : '')}</p></div>
    </Link>
  </li>
)