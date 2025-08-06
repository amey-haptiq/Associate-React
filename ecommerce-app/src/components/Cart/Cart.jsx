import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice.js';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let totalCart=cartItems.reduce((amount,item)=>{ return amount+(item.price*(item.quantity || 1));},0);

  return (
    <div className="cart-container">
      <h2>Your cart </h2>
      {cartItems.length === 0 ? <p>Empty cart</p> : (
        <>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove </button>
            </div>
          </div>
        ))}
        <h1>Total: ${totalCart.toFixed(2)}</h1></>
      )}
    </div>
  );
};

export default Cart;
