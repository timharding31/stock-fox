import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root.jsx';
import configureStore from './store/store.js';

// window testing
import * as SessionApiUtil from './util/session_api_util';
import * as FmpApiUtil from './util/fmp_api_util';
import { patchPortfolio, getPortfolio } from './util/portfolio_util';
import { getStocksBySector } from './util/stock_util';
import { getWatchlist } from './util/watchlist_util';
import { fetchSingleStock, fetchStockDetail, fetchStocksBySector } from './actions/stock_actions';
import { fetchWatchlist, fetchWatchlistPrices } from './actions/watchlist_actions';
import { fetchStockSearchResults } from './actions/search_actions';
import {
  fetchMaxStockPrices,
  fetch5YStockPrices,
  fetch1YStockPrices,
  fetch3MStockPrices,
  fetch1MStockPrices,
  fetch1WStockPrices,
  fetch1DStockPrices
} from './actions/price_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        currentUser: window.currentUser
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  // window testing
  window.getWatchlist = getWatchlist;
  // window.patchPortfolio = patchPortfolio;
  window.getPortfolio = getPortfolio;
  window.fetchStocksBySector = fetchStocksBySector;
  window.getSingleStock = fetchSingleStock;
  window.fetchStockDetail = fetchStockDetail;
  // window.fetchWatchlistPrices = fetchWatchlistPrices;
  window.fetchStockSearchResults = fetchStockSearchResults;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
  window.fetchMaxStockPrices = fetchMaxStockPrices;
  window.fetch5YStockPrices = fetch5YStockPrices;
  window.fetch1YStockPrices = fetch1YStockPrices;
  window.fetch3MStockPrices = fetch3MStockPrices;
  window.fetch1MStockPrices = fetch1MStockPrices;
  window.fetch1WStockPrices = fetch1WStockPrices;
  window.fetch1DStockPrices = fetch1DStockPrices;
});