

export const arrayToAssetObj = array => array.reduce((obj, item) => {
  obj[item['symbol']] = item
  return obj
}, {}
);