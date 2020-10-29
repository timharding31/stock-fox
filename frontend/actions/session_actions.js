import { signup, login, logout, demoLogin, getUser, patchBuyingPower, resetBuyingPower } from '../util/session_api_util';
import { fetchWatchlist } from './watchlist_actions';
import { fetchPortfolio } from './portfolio_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const addFunds = (userId, amt) => dispatch => patchBuyingPower(userId, amt)
  .then(user => dispatch(receiveCurrentUser(user)));

export const resetFunds = (userId) => dispatch => resetBuyingPower(userId)
  .then(user => dispatch(receiveCurrentUser(user)));

export const updateUserParams = () => dispatch => getUser()
  .then(user => dispatch(receiveCurrentUser(user)));

export const resetSessionErrors = () => dispatch => dispatch(clearSessionErrors());

export const loginDemoUser = () => dispatch => demoLogin()
  .then(user => {
    fetchWatchlist()(dispatch)
    fetchPortfolio()(dispatch)
    return dispatch(receiveCurrentUser(user))
  });

export const signupUser = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)));

export const loginUser = user => dispatch => login(user)
  .then(user => {
    fetchWatchlist()(dispatch)
    fetchPortfolio()(dispatch)
    return dispatch(receiveCurrentUser(user))
  }, err => dispatch(receiveErrors(err.responseJSON)));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()));