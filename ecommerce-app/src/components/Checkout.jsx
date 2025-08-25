import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addToOrder } from '../redux/orderSlice';
import { removeFromCheckout } from '../redux/checkoutSlice';

export default function Checkout() {
  const checkoutItems = useSelector(state => state.checkout)
  const dispatch = useDispatch()

  const totalCheckout = checkoutItems
    .reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
    .toFixed(2)

  const handleConfirmOrder = () => {
    
    dispatch(addToOrder([...checkoutItems]))
    dispatch({ type: 'cart/removeCart' })
    dispatch({ type: 'checkout/removeFromCheckout' })
  }

  return (
    <div className="checkout-container">
      <h2>Checkout Page</h2>

      {checkoutItems.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {checkoutItems.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${totalCheckout}</h3>

          <Link to="/order">
            <button onClick={handleConfirmOrder} className='confirmOrder-btn'>Confirm order</button>
          </Link>
        </>
      )}

      <Link to="/cart">
        <button className='backPage-btn'>Back</button>
      </Link>
    </div>
  )
}
