import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice.js';
import { Link } from 'react-router-dom';
import { addToCheckout } from '../../redux/checkoutSlice.js';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
<<<<<<< HEAD
  let totalCart = cartItems.reduce((amount, item) => { return amount + (item.price * (item.quantity || 1)); }, 0);
=======

  
  const [quantities, setQuantities] = useState({});

  
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = item.quantity || 1;
      
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (itemId, value) => {
    const qty = Math.max(1, Math.min(12, Number(value)));
    setQuantities(prev => ({
      ...prev,
      [itemId]: qty
    }));
  };

  const totalCart = cartItems.reduce((total, item) => {
    const qty = quantities[item.id] || 1;
    return total + item.price * qty;
  }, 0);

  const handleCheckout = () => {
    const updatedItems = cartItems.map(item => ({
      ...item,
      quantity: quantities[item.id] || 1
    }));
    console.log('Checkout items:', updatedItems);
    dispatch(addToCheckout(updatedItems));
  };
>>>>>>> a5b16d8 (Changes are done)

  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      {cartItems.length === 0 ? (
        <p>Empty cart</p>
      ) : (
        <>
<<<<<<< HEAD
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove </button>
=======
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Quantity: {quantities[item.id]}</p>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={quantities[item.id]}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                />
                <p>Price: ${(item.price * (quantities[item.id] || 1)).toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
              </div>
>>>>>>> a5b16d8 (Changes are done)
            </div>
          ))}
          <h1>Total: ${totalCart.toFixed(2)}</h1>
          {sessionStorage.getItem("user") ? (
            <Link to="/checkout">
              <button onClick={handleCheckout}>Checkout</button>
            </Link>
          ) : (
            <p style={{ color: 'red' }}>Please login to proceed</p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
