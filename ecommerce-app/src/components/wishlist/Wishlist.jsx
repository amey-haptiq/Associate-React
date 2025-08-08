import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/wishlistSlice.js';

const Cart = () => {
  const wishlistItems = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      <h2>Your wishlist </h2>
      {wishlistItems.length === 0 ? <p>Don't have any thing in your wishlist</p> : (
        wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              
              <button onClick={() => dispatch(removeFromWishlist(item))}>Remove </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
