export default stocks => {
  let topHundred = stocks.sort(stock => -stock.price).slice(0,100);
  return topHundred;
}