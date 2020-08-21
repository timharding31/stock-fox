import React from 'react';
import numeral from 'numeral';


export default ({ stock, fetchStockDetail }) => {
  if (!stock.ceo) return null;
  return (
    <div className="company-profile">
      <p className="company-description">{stock.description}</p>
      <div className="profile-row-one">
        <strong>CEO</strong>
        <p>{stock.ceo}</p>
        <strong>Employees</strong>
        <p>{numeral(stock.fullTimeEmployees).format('0,0')}</p>
        <strong>Headquarters</strong>
        <p>{`${stock.city}, ${stock.state}`}</p>
        <strong>Industry</strong>
        <p>{stock.industry}</p>
      </div>
      <div className="profile-row-two">
        <strong>Market Cap</strong>
        <p>{numeral(stock.mktCap).format('0.00a').toUpperCase()}</p>
        <strong>Discounted Cash Flow</strong>
        <p>{stock.dcf}</p>
        <strong>52-Week Range</strong>
        <p>{stock.range}</p>
        <strong>Average Volume</strong>
        <p>{numeral(stock.volAvg).format('0.0a').toUpperCase()}</p>
      </div>
    </div>
  )
}