import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our storeReady platform</h1>
      <p>Your one-stop shop for cosmic deals and stellar products!</p>
      <Link to="/products">
        <button className="explore-btn">Explore Products</button>
      </Link>
    </div>
  );
};

export default Home;
