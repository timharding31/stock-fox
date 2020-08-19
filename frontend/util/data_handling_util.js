

export const arrayToAssetObj = array => array.reduce((obj, item) => {
  obj[item['symbol']] = item
  return obj
}, {}
);

export const formatDate = date => {
  date = new Date(date);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return year + '-' + month + '-' + day;
}