import React from "react";
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/auth_route_util';
import ContentRoute from '../util/content_route_util';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import StockShowContainer from './stock/stock_show_container';
import StockControlsContainer from './controls/stock_controls_container'
import SidebarModuleContainer from './modules/sidebar_module_container';
import DisplayModeToggle from './header/display_mode_toggle';

import HeaderLogo from './header/logo';
import HeaderLinks from './header/links';
import HeaderAuthNav from './header/auth_nav';
import SearchBarContainer from './header/search_bar_container';
import HeaderAccountNav from './header/account_nav';
import Splash from './splash';

const Content = () => (
  <div className="application-content">
    <section className="content-main">
      <Route path="/stocks/:symbol" component={StockShowContainer} />
    </section>
    <aside className="content-sidebar">
      <Route path="/stocks/:symbol" component={StockControlsContainer} />
      <Route path="/" component={SidebarModuleContainer} />
    </aside>
  </div>
)

const Auth = () => (
  <div className="user-auth-content">
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={Splash} />
  </div>
)

export default () => (
  <div id="application">
    <header className="application-header">
      <div className="header-content">
        <AuthRoute exact path="/login" component={HeaderLogo} />
        <AuthRoute exact path="/signup" component={HeaderLogo} />
        <AuthRoute exact path="/" component={HeaderLogo} />
        <ContentRoute path="/" component={HeaderLogo} />
        <AuthRoute exact path="/" component={HeaderLinks} />
        <AuthRoute exact path="/" component={HeaderAuthNav} />
        <ContentRoute path="/" component={SearchBarContainer} />
        <ContentRoute path="/" component={HeaderAccountNav} />
        <ContentRoute path="/" component={DisplayModeToggle} />
      </div>
    </header>
      <AuthRoute exact path="/login" component={Auth} />
      <AuthRoute exact path="/signup" component={Auth} />
      <AuthRoute path="/" component={Auth} />
      <ContentRoute path="/" component={Content} />
  </div>
);