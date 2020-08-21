import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../header/search_bar';

export default ({ loggedIn, currentUser, logout }) => {
  let authButtons = []; let navButtons = []; let searchBar = (<SearchBar />);
  if (loggedIn) {
    authButtons = [
      (<div className="account-actions">Account
        <ul className="account-dropdown">
          <li>{currentUser.username}</li>
          <li><button onClick={logout}>Log Out</button></li>
        </ul>
      </div>)
    ]
  } else {
    searchBar = null;
    navButtons = [
      (<a href="https://www.linkedin.com/in/timharding31/" target="_blank">LinkedIn</a>),
      (<a href="https://www.github.com/timharding31" target="_blank">GitHub</a>)
    ];
    authButtons = [
      (<Link to="/login">Log In</Link>),
      (<button><Link to="/signup">Sign Up</Link></button>)
    ];
  }

  return (
    <div className="navbar">
      <ul className="navbar-logo">
        <li className="navbar-logo-img"></li>
        <li className="navbar-logo-text">StockFox</li>
      </ul>
      <ul className="navbar-nav">{navButtons.map((navButton, idx) => (<li key={`nav-${idx}`}>{navButton}</li>))}</ul>
      {searchBar}
      <ul className="navbar-auth">{authButtons.map((authButton, idx) => (<li key={`auth-${idx}`}>{authButton}</li>))}</ul>
    </div>
  )


}