import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice.js';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your cart </h2>
      {cartItems.length === 0 ? <p>Empty cart</p> : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
