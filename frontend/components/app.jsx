import React from "react";
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import NavBarContainer from './nav/nav_bar_container';

export default () => (
  <div>
    <header>
      <Route exact path="/" component={NavBarContainer} />
    </header>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);