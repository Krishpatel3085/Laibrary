import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart data from the backend
    const fetchCartData = async () => {
      try {
        const response = await axios.get('https://ldfs6814-8085.inc1.devtunnels.ms/checkout/getorder');
        setCart(response.data || []);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching cart data:', error);
        alert('There was an error fetching your cart.');
      }
    };

    fetchCartData();
  }, []);


  return (
    <div className="container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
                <p>Author: {item.author}</p>
                <p>Price: ${item.price}.00</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <button disabled={loading}>
            {loading ? 'Processing...' : 'Complete Purchase'}
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;