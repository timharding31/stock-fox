const moment = require('moment');

let fiveYearsAgo = moment().subtract(5, 'years').format('YYYY-MM-DD');
let oneYearAgo = moment().subtract(1, 'years').format('YYYY-MM-DD');
let threeMonthsAgo = moment().subtract(3, 'months').format('YYYY-MM-DD');
let oneMonthAgo = moment().subtract(1, 'years').format('YYYY-MM-DD');
let oneWeekAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');
let oneDayAgo = moment().subtract(1, 'days').format('YYYY-MM-DD');

export const getMaxStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${[stock.symbol]}?serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get5YStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${[stock.symbol]}?serietype=line?from=${fiveYearsAgo}&apikey=${window.fmpAPIKey}`
  })
);
export const get1YStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${[stock.symbol]}?serietype=line?from=${oneYearAgo}&apikey=${window.fmpAPIKey}`
  })
);
export const get3MStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${[stock.symbol]}?serietype=line?from=${threeMonthsAgo}&apikey=${window.fmpAPIKey}`
  })
);
export const get1MStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${[stock.symbol]}?serietype=line?from=${oneMonthAgo}&apikey=${window.fmpAPIKey}`
  })
);
export const get1WStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/15min/${[stock.symbol]}?serietype=line?from=${oneWeekAgo}&apikey=${window.fmpAPIKey}`
  })
);
export const get1DStockPrices = stock => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${[stock.symbol]}?serietype=line?from=${oneDayAgo}&apikey=${window.fmpAPIKey}`
  })
);