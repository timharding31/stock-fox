import numeral from 'numeral';

export const arrayToAssetObj = array => array.reduce((obj, item) => {
  obj[item['symbol']] = item
  return obj
}, {}
);

export const compareArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let el of array1) {
    if (array2.indexOf(el) === -1 ) return false;
  }
  return true;
}

export const formatPrice = price => (price) ? numeral(Number(price)).format('$0.00') : price;

export const sleep = ms => (new Promise(resolve => setTimeout(resolve, ms)));