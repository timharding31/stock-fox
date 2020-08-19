import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root.jsx';
import configureStore from './store/store.js';

// window testing
import * as SessionApiUtil from './util/session_api_util';
import { getWatchlist } from './actions/asset_actions';

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
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
});