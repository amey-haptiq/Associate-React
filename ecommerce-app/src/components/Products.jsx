import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';
import { addToWishlist } from '../redux/wishlistSlice.js';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="products-grid">

      {products.length==0 ? <h1>Something went wrong</h1>:
      products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist </button>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
