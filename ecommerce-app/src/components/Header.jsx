import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart);
  const wishlistItems = useSelector(state => state.wishlist)

  return (
    <header className="header">
      <h1>storeReady</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/wishlist">Wishlist({wishlistItems.length})</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
