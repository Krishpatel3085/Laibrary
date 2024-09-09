import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";
import Table from "react-bootstrap/Table";
import "./checkout.css";
import Cookies from "js-cookie";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [gtotal, setGtotal] = useState(0);

  const CheckOutUrl = ("http://localhost:8085/")
  useEffect(() => {
    const fetchCartData = async () => {
      const userName = Cookies.get("username");

      if (!userName) {
        alert("No user is logged in");
        return;
      }

      try {
        const response = await axios.get(CheckOutUrl + `/checkout/getorder`,
          {
            params: { username: userName } // Pass username as query parameter
          }
        );

        console.log(response.data);

        const fetchedData = response.data || [];

        // Filter items by username (if needed)
        const filteredData = fetchedData.filter(item => item.username === userName);

        // Merge cart items with the same title
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
      await axios.delete(CheckOutUrl + `/checkout/orderDelete/${id}`);
      // Remove the deleted item from state
      setCart(cart.filter(item => item._id !== id));
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="cart">
        <h1 className="w-25 ms-5 text-center">Cart</h1>
        <Table striped bordered className="w-75 m-auto text-center mb-5">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href="-" onClick={() => deleteItem(item._id)}>
                    <i className="bi bi-x-circle"></i>
                  </a>
                </td>
                <td>
                  <img
                    src={CheckOutUrl + "/book/upload/" + item.imageUrl}
                    className="card-img-top"
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}

            <tr>
              <td colSpan={5}>
                <b>Grand total</b>
              </td>
              <td><b>{gtotal.toFixed(2)}</b></td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
