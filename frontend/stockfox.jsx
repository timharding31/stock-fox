import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root.jsx';
import configureStore from './store/store.js';

// window testing
import * as SessionApiUtil from './util/session_api_util';
import * as FmpApiUtil from './util/fmp_api_util';
import { fetchSingleStock, fetchStockDetail } from './actions/asset_actions';
import { fetchWatchlist } from './actions/watchlist_actions';
import {
  fetchMaxStockPrices,
  fetch5YStockPrices,
  fetch1YStockPrices,
  fetch3MStockPrices,
  fetch1MStockPrices,
  fetch1WStockPrices,
  fetch1DStockPrices
} from './actions/chart_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
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
  window.getWatchlist = fetchWatchlist;
  window.getSingleStock = fetchSingleStock;
  window.fetchStockDetail = fetchStockDetail;
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