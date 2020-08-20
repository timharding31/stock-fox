import React from "react";
import { Route } from 'react-router-dom';
import AuthRoute from '../util/auth_route_util';
import ContentRoute from '../util/content_route_util';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import NavBarContainer from './nav/nav_bar_container';
import StockShowContainer from './stock/stock_show_container'

export default () => (
  <div>
    <header>
      <AuthRoute exact path="/" component={NavBarContainer} />
      <ContentRoute path="/" component={NavBarContainer} />
    </header>
    <ContentRoute path="/stocks/:symbol" component={StockShowContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);