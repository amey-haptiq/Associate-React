import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <header className="header">
      <h1>storeReady</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Products">Shop</Link>
        <Link to="/Cart">Cart ({cartItems.length})</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
