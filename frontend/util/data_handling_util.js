import numeral from 'numeral';

export const queryFromStock = stock => stock.name.substring(0, stock.name.search(/[^a-zA-Z]/));

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

export const compareSymbols = (array1, array2) => {
  for (let el of array2) {
    if (array1.indexOf(el) === -1) return false
  }
  return true;
}

export const mergeArrays = (array1, array2) => {
  let combined = [...array1];
  for (let el of array2) {
    if (!combined.includes(el)) combined.push(el);
  }
  return combined;
}

export const formatPrice = price => price === '' ? price :  numeral(Number(price)).format('$0,0.00');
// export const formatPrice = price => (price) ? numeral(Number(price)).format('$0.00') : price;

export const sleep = ms => (new Promise(resolve => setTimeout(resolve, ms)));

export const compareListItems = selector => (a, b) => {
  if (selector === 'price') {
    return Math.sign(b.price - a.price);
  } else {
    let aStr = a[selector].toUpperCase(); let bStr = b[selector].toUpperCase();
    let comp = 0;
    if (aStr > bStr) {
      comp = 1;
    } else if (bStr > aStr) {
      comp = -1;
    }
    return comp;
  }
  // let priceA = parseInt(a.props.children.props.children[2].props.children.substring(1));
  // let priceB = parseInt(b.props.children.props.children[2].props.children.substring(1));
  // return Math.sign(priceB - priceA);
}