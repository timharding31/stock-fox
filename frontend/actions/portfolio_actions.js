import { getPortfolio,
  postStockToPortfolio,
  deleteStockFromPortfolio } from '../util/portfolio_util';
import { fetchSingleStock } from './stock_actions';
import { fetch1DStockPrices } from './price_actions';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS';

const receivePortfolio = portfolio => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
});

const receivePortfolioErrors = errors => ({
  type: RECEIVE_PORTFOLIO_ERRORS,
  errors
})

export const fetchPortfolio = () => dispatch => getPortfolio()
  .then(portfolio => {
    Object.keys(portfolio).forEach(symbol => fetchSingleStock(symbol)(dispatch));
    Object.keys(portfolio).forEach(symbol => fetch1DStockPrices(symbol)(dispatch));
    return dispatch(receivePortfolio(portfolio))
  }, err => dispatch(receiveErrors(err.responseJSON)));

export const buyStock = (symbol, order) => dispatch => postStockToPortfolio(symbol, order)
  .then(portfolio => dispatch(receivePortfolio(portfolio)), err => dispatch(receiveErrors(err.responseJSON)));

export const sellStock = (symbol, order) => dispatch => deleteStockFromPortfolio(symbol, order)
  .then(portfolio => dispatch(receivePortfolio(portfolio)), err => dispatch(receiveErrors(err.responseJSON)));