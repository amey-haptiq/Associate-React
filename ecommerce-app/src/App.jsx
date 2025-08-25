import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Wishlist from './components/wishlist/Wishlist';

import Checkout from "./components/Checkout";
import Order from './components/Order';

const App = () => {

  const[searchItem,setSearchItems]=React.useState('')
  // const[login,setlogin]=React.useState(false)
  return (
    <>
      <Header setSearchItems={setSearchItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products searchItems={searchItem}/>} />
        <Route path="/cart" element={<Cart  />} />
        <Route path="/wishlist" element={<Wishlist /> }/>
        <Route path="/login" element={<Login />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order/>}/>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
