import { arrayToAssetObj } from '../util/data_handling_util';

export default stocks => {
  let topHundred = stocks.sort(stock => -stock.price).slice(0,100);
  return arrayToAssetObj(topHundred);
}