const moment = require('moment');

let fiveYearsAgo = moment().subtract(5, 'years').format('YYYY-MM-DD');
let oneYearAgo = moment().subtract(1, 'years').format('YYYY-MM-DD');
let threeMonthsAgo = moment().subtract(3, 'months').format('YYYY-MM-DD');
let oneMonthAgo = moment().subtract(1, 'months').format('YYYY-MM-DD');
let oneWeekAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');
let oneDayAgo = moment().subtract(1, 'days').format('YYYY-MM-DD');

export const getMaxStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get5YStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fiveYearsAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get1YStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${oneYearAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get3MStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${symbol}?from=${threeMonthsAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get1MStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${symbol}?from=${oneMonthAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get1WStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/15min/${symbol}?from=${oneWeekAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const get1DStockPrices = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?from=${oneDayAgo}&serietype=line&apikey=${window.fmpAPIKey}`
  })
);
export const getStockProfile = symbol => (
  $.ajax({
    url: `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${window.fmpAPIKey}`
  })
)