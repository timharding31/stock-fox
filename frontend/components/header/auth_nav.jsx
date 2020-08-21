import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="header-auth-nav-container">
    <Link className="header-link" to="/login">Log In</Link>
    <button className="header-auth button"><Link to="/signup">Sign Up</Link></button>
  </div>
)