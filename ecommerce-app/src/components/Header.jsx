import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from '../App';

const Header = ({setSearchItems}) => {
  const cartItems = useSelector(state => state.cart);
<<<<<<< HEAD
  const wishlistItems = useSelector(state => state.wishlist)
=======
  const wishlistItems=useSelector(state=>state.wishlist)
  

  let changeText=(e)=>{
    setSearchItems(e.target.value)
  
  }
>>>>>>> a5b16d8 (Changes are done)

  return (
    <header className="header">
      <h1>storeReady</h1>
      
      
      <input type="text" className='searchBar' placeholder='search products' onChange={changeText} />
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/wishlist">Wishlist({wishlistItems.length})</Link>
        { sessionStorage.getItem("user") ? (
        <Link to="/logout">Logout</Link>):(
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
