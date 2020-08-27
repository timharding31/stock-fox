import React from 'react';
import Loading from '../loading';
import MiniStockContainer from './mini_stock_container';

export default ({ entityName, errors, entityData, prices, loading, stocks }) => {
  if (loading) {
    return (<Loading loading={loading} compName={`${entityName}-price-list`} />)
  }
  let listItems = [];
  if (entityData.allSymbols.length > 0 && Object.entries(prices).length > 0) {
    for (let symbol of entityData.allSymbols) {
      listItems.push(
        <MiniStockContainer
          key={`${entityName}-chart-${symbol}`}
          symbol={symbol}
          amt={entityData.bySymbol ? entityData.bySymbol[symbol].amt : null}
          prices={prices}
          stock={stocks[symbol]}
        />)
    }
  } else if (errors.length > 0) {
    listItems.push(errors.map((error, idx) => (<li className={`${entityName}-errors`} key={`error-${idx}`}>{error}</li>)));
  }
  return (
    <div className={`${entityName}-module`}>
      <h4>{`${entityName.substring(0,1).toUpperCase()}${entityName.substring(1)}`}</h4>
      <ul className={`${entityName}-charts`}>
        {listItems}
      </ul>
    </div>
  );
}


