import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root.jsx';
import configureStore from './store/store.js';

// window testing
import * as SessionApiUtil from './util/session_api_util';
import * as FinnhubApiUtil from './util/finnhub_api_util';
import { getSingleStock } from './actions/asset_actions';
import { getWatchlist } from './actions/watchlist_actions';

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
  window.getWatchlist = getWatchlist;
  window.getSingleStock = getSingleStock;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
  window.fetchStockNews = FinnhubApiUtil.fetchStockNews;
});

export const apiKey = window.finnhubAPIKey;