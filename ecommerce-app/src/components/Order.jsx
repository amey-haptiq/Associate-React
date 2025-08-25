
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default function Order() {
  const orders = useSelector(state => state.order)
  let total=orders.reduce((amount,order)=>{return amount+order.reduce((subTotal,item)=>{return subTotal+(item.price*item.quantity)},0)},0).toFixed(2)

  return (
    <>
    <div className="order-container">
      <h2>Your Orders</h2>

      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order, orderIndex) => (
          <div key={orderIndex} className="order-group">
            <h3>Order #{orderIndex + 1}</h3>
            {order.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <hr />
          </div>
          
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
    
    <div className='shopMore'>
    <Link to="/products">
    <button className='shopMore-btn'>Shop More!!!!</button></Link></div>


    </>
  )
}
