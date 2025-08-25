import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  
  return (
    <div className="home-container">
<<<<<<< HEAD
      <h1>Welcome to our StoreReady platform</h1>
=======
      <h1>Welcome {sessionStorage.getItem("user")} to our storeReady platform</h1>
>>>>>>> a5b16d8 (Changes are done)
      <p>Your one-stop shop for cosmic deals and stellar products!</p>
      <Link to="/products">
        <button className="explore-btn">Explore Products</button>
      </Link>
    </div>
  );
};

export default Home;
