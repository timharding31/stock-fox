import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="header-logo-container">
    <Link to="/" >
      <h1 className="wordmark">StockFox</h1>
      <span className="logo">&nbsp;
        {/* <img className="hover" src="/assets/logo_hover-b06c59372a523a4bcc4d8c24b4803266bc03e25bf072dada6d09234aae186e5e.png"></img> */}
        <img className="hover" src="/assets/logo_hover_2-a321603e2d442cd08d9214e86e3add53c4ec656e11851420af5032b28b9d23a4.png"></img>
        <img className="standard" src="/assets/logo_standard-87be9a055e3abca8be3032103fbb26446eaf9d57e17c95413c7e880a7a9f1b80.png"></img>
      </span>
    </Link>
  </div>
);