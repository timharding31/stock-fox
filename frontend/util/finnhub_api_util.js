import { apiKey } from '../stockfox';

import { formatDate } from './data_handling_util';

const curDate = new Date();
const curDateStr = formatDate(curDate);
const prevDateStr = formatDate(new Date(curDate.setMonth(curDate.getMonth() - 1)));

export const fetchStockNews = stock => (
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${[stock.symbol]}&from=${curDateStr}&to=${curDateStr}&token=${apiKey}`
  })

);