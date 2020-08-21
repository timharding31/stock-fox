import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="header-logo-container">
    <Link to="/" >
      <h1 className="wordmark">Stock Fox</h1>
      <span className="logo">&nbsp;</span>
    </Link>
  </div>
);