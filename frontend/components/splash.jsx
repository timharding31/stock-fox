import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  // document.location.reload();
  return (
  <div className="home-page">
    <div className="home-page-text">
        <h1>"Investing" for Everyone</h1>
        <p>StockFox, a completely derivative player in the world commission-free investing, gives you very few ways to make your money work harder.</p>
        <button><Link to="/signup">Sign Up</Link></button>
    </div>
    <video autoPlay="autoPlay" loop="loop" muted="muted" className="home-page-video" src="/assets/homepage_video-8b8fd1f90e49bc4c08deb714da9fa18acf342dd2edf5819fc1bf6cb1235b4198.mp4"></video>
    <img className="home-page-img" src="/assets/homepage_video_background-91db2d9f7fd4918147679b4c16508364c8190148d6e4d8c5b5279ff0fa4d674d.png" alt=""/>
  </div>
  )
}