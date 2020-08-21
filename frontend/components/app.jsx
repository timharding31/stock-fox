import React from "react";
import { Route } from 'react-router-dom';
import AuthRoute from '../util/auth_route_util';
import ContentRoute from '../util/content_route_util';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import StockShowContainer from './stock/stock_show_container'
import StockSidebarContainer from './stock/stock_sidebar_container'

import HeaderLogo from './header/logo';
import HeaderLinks from './header/links';
import HeaderAuthNav from './header/auth_nav';
import SearchBarContainer from './header/search_bar_container';
import HeaderAccountNav from './header/account_nav';

const Content = () => (
  <div className="application-content">
    <section className="content-main">
      <ContentRoute path="/stocks/:symbol" component={StockShowContainer} />
    </section>
    <aside className="content-sidebar">
      <ContentRoute path="/stocks/:symbol" component={StockSidebarContainer} />
    </aside>
  </div>
)

const Auth = () => (
  <div className="user-auth-content">
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    {/* <AuthRoute exact path="/" component={Spash} /> */}
  </div>
)

export default () => (
  <div id="application">
    <header className="application-header">
      <div className="header-content">
        <Route path="/" component={HeaderLogo} />
        <AuthRoute exact path="/" component={HeaderLinks} />
        <AuthRoute exact path="/" component={HeaderAuthNav} />
        <ContentRoute path="/" component={SearchBarContainer} />
        <ContentRoute path="/" component={HeaderAccountNav} />
      </div>
    </header>
    <ContentRoute component={Content} />
    <AuthRoute path="/" component={Auth} />
  </div>
);