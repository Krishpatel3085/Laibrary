import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Cookies from "js-cookie";
import { APi_URL } from "../../Utils/apiConfig";
import Header from "../NavBar/Header";
import Button from 'react-bootstrap/Button';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [gtotal, setGtotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const userName = Cookies.get("User-username");

      if (!userName) {
        alert("No user is logged in");
        return;
      }

      try {
        const response = await axios.get(APi_URL + `checkout/getorder`, {
          params: { username: userName }, // Pass username as query parameter
        });
        console.log("Checkout data fetch", response.data)
        const fetchedData = response.data || [];

        const filteredData = fetchedData.filter((item) => item.username === userName);

        console.log("filtered data", filteredData);

        const mergedCart = filteredData.reduce((acc, item) => {
          const existingItem = acc.find((i) => i.title === item.title);
          if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.subtotal = existingItem.price * existingItem.quantity;
          } else {
            item.subtotal = item.price * item.quantity;
            acc.push(item);
          }
          return acc;
        }, []);

        setCart(mergedCart);

        const total = mergedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setGtotal(total);

      } catch (error) {
        console.error("Error fetching cart data:", error);
        alert("There was an error fetching your cart.");
      }
    };

    fetchCartData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(APi_URL + `checkout/orderDelete/${id}`);

      const updatedCart = cart.filter((item) => item._id !== id);
      setCart(updatedCart);

      const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setGtotal(total);

    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpay = async () => {
    const isLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Fetch the order details from the backend to create a Razorpay order
    try {
      const response = await axios.post(APi_URL + "Payment/createPayment", {
        amount: gtotal,
      });
      console.log("check payment response", response)
      const { data } = response.data;

      const options = {
        key: "rzp_test_BzZtWGTclpXVBE",
        amount: gtotal * 100,
        currency: "INR",
        order_id: data.id,
        handler: async (response) => {

          try {
            await axios.post(APi_URL + "Payment/verifyPayment", {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            });
            alert("Payment successful!");
            setCart([]);
            setGtotal(0);
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("There was an error verifying the payment.");
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("There was an error processing your payment.");
    }
  };


  return (
    <>
      <Header />

      <div className="cart container mx-auto px-4 pt-5 ">
        <h1 className="text-3xl font-bold text-center my-6 pt-5">Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-center">Remove</th>
                <th className="py-3 px-4 text-center">Image</th>
                <th className="py-3 px-4 text-center">Product</th>
                <th className="py-3 px-4 text-center">Price</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4 text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <tr key={index} className="text-center border-b">
                    <td className="py-4">
                      <span onClick={() => deleteItem(item._id)} className="cursor-pointer text-red-500 hover:text-red-700">
                        <i className="bi bi-x-circle"></i>
                      </span>
                    </td>
                    <td className="py-4">
                      <img
                        src={item.imageUrl}
                        className="w-16 h-16 object-cover mx-auto"
                        alt={item.title}
                      />
                    </td>
                    <td className="py-4">{item.title}</td>
                    <td className="py-4">${item.price.toFixed(2)}</td>
                    <td className="py-4">{item.quantity}</td>
                    <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-600">
                    Your cart is empty.
                  </td>
                </tr>
              )}

              <tr>
                <td colSpan={4} className="text-right py-4 font-semibold text-lg">
                  Grand total:
                </td>
                <td className="py-4 font-bold text-lg">${gtotal.toFixed(2)}

                </td>
                <td>
                  <Button type="submit" onClick={handleRazorpay} className="bg-red-600 hover:bg-red-700 w-full sm:w-auto border-0">Checkout</Button>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}


