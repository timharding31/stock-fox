import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

const HeaderAccountNav = ({ currentUser, logout }) => (
  <div className="header-account-nav-container">
    <h3 className="account-dropdown-trigger">Account</h3>
    <ul className="account-dropdown">
      <li>{currentUser.username}</li>
      <li><button onClick={logout}>Log Out</button></li>
    </ul>
  </div>
)
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAccountNav);