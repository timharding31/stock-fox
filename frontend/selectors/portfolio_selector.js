export const ownedStockSelector = portfolio => {
  let newPort = {};
  for (let symbol in portfolio) {
    if(portfolio[symbol].type === 'Stock') newPort[symbol] = portfolio[symbol];
  }
  return newPort;
}