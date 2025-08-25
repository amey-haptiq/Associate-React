import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';
import { addToWishlist } from '../redux/wishlistSlice.js';

const Products = ({ searchItems }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const[productlist,setProductlist]=useState([]);

  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data),
      setProductlist(res.data)})
      
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setProducts([]); 
      });
  }, []);

  
    useEffect(() => {
    const filtered = searchItems
      ? products.filter(product =>
          product.title.toLowerCase().includes(searchItems.toLowerCase())
        )
      : products;

<<<<<<< HEAD
      {products.length===0 ? <h1>Something went wrong</h1>:
      products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist </button>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart </button>
        </div>
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-grid">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : products.length === 0 ? (
        <h1>No products available</h1>
      ) : (
        products.map(product => (
=======
    setProductlist(filtered);
  }, [searchItems, products]);
const handleSort=()=>{setProductlist(
[...productlist].sort((a, b) => a.price - b.price) )}
  return (
    <>
          <button className="filter-btn" onClick={handleSort}>Filtrered by Price</button>

    <div className="products-grid">
      {
        productlist.map(product => (
>>>>>>> a5b16d8 (Changes are done)
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
<<<<<<< HEAD
            <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist </button>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart </button>
          </div>
        ))
      )}
=======
            <p>Product Quantity:{product.quantity}</p>
            <button onClick={() => dispatch(addToWishlist(product))}>
              Add to Wishlist
            </button>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      
>>>>>>> a5b16d8 (Changes are done)
    </div>
    </>
  );
};

export default Products;
