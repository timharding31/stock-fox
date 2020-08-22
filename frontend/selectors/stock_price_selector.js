export const stockPriceSelector = receivedPrices => {
  let newPrices;
  if (receivedPrices.historical) {
    return receivedPrices.historical
      .map(obj => ({ date: new Date(obj.date), price: obj.close }))
      .sort(obj => -obj.date);
  } else {
    return receivedPrices
      .map(obj => ({ date: new Date(obj.date), price: obj.close }))
      .sort(obj => -obj.date);
  }
}