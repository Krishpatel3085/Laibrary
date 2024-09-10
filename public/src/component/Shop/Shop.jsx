import React from "react";
import "./shop.css";
import "./ShopMedia.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import chid from "../images/father_book.png";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";
import { APi_URL } from "../../Utils/apiConfig";
function Shop() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    axios
      .get(APi_URL + "book/getbook")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };

  const addToCart = async (item) => {
    try {
      const response = await axios.post(APi_URL + "checkout/order", {
        itemId: item._id,
        title: item.title,
        price: item.price,
        quantity: 1,
      });

      // Check if the response indicates success
      if (response.data) {
        alert("Item added to cart successfully");
        navigate("/checkout");
      } else {
        alert(
          `Failed to add item to cart: ${
            response.data.message || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <>
      <NavBar />

      {/* first */}
      <section id="Shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4
                className="text-light text-center"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <span>
                  Home{" "}
                  <span className="mx-3">
                    <i class="bi bi-book fs-5 "></i>
                  </span>{" "}
                  Shop
                </span>
              </h4>
              <h2
                className="text-center text-light"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                SHOP
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <div className="container">
        <div className="row text-center">
          <div className="Discover col-md-12">
            <h2
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Discover new books
            </h2>
            <p
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row border-top py-3">
          <div className="next col-md-12 d-flex justify-content-between align-content-center">
            <h3 data-aos="flip-up" ata-aos-duration="3000">Discover Your Next Book</h3>
            <span>
              <a href="-" data-aos="flip-up" ata-aos-duration="3000">View All Book</a>
            </span>
          </div>
        </div>
        <div className="row pb-4" id="text_new">
          {items && items.length > 0 ? (
            items.map((item) => (
              <div className="col-md-3 col-lg-3" data-aos="fade-up"
              data-aos-duration="3000" key={item._id}>
                <Card
                  style={{ width: "auto", fontFamily: "Lora" }}
                  className="api_card border-0 text-center"
                >
                  <Card.Img
                    variant="top"
                    className="card_sell_img img-fluid"
                    onClick={() => handleImageClick(item._id)}
                    src={APi_URL + `book/upload/${item.url}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>{item.author}</Card.Title>
                    <Card.Text>
                      <span className="font_extra me-1 text-dark fs-6">
                        <strike>${item.price2}.00</strike>
                      </span>
                      <span className="font_extra text-danger fw-bold fs-5">
                        <u>${item.price}.00</u>
                      </span>
                    </Card.Text>
                    <Button
                      className="add_to_cart"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <h4>
              <b>Loading Books .....</b>
            </h4>
          )}
        </div>
      </div>

      {/* Third Section */}
      <section className="mb-3" id="back_images">
        <div className="container  d-flex align-items-center ">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="lectus" >
                <h6 className="text-uppercase font-weight-bold mb-3 text-danger" data-aos="zoom-out-down" data-aos-duration="2000">
                  New Release
                </h6>
                <h3 className="font-weight-bold mb-3" data-aos="zoom-out-down" data-aos-duration="2000">Me & My Dad</h3>
                <h5 className="font-italic mb-4" data-aos="zoom-out-down" data-aos-duration="2000">
                  A novelette book by John Doe
                </h5>
                <p className="text-justify mb-4" data-aos="zoom-out-down" data-aos-duration="2000">
                  Morbi proin condimentum litora duis lectus vivamus parturient
                  torquent. Phasellus fames lectus molestie iaculis lacus
                  condimentum duis. Ac ligula etiam magna efficitur quisque in.
                  Malesuada mattis integer congue nulla id ipsum vestibulum
                  mollis fames neque dictum. Ex vivamus vehicula natoque porta
                  ipsum dis. Interdum viverra semper dolor dignissim urna
                  habitasse orci. Elementum ullamcorper libero magna montes ut
                  orci suspendisse magnis nam id ligula.
                </p>
                <span className="font-weight-bold mb-2 d-block fs-3" data-aos="zoom-out-down" data-aos-duration="2000">
                  Price : <span className="text-danger fs-3"> $40.00</span>{" "}
                </span>
                <Button className="add_to_cart" data-aos="zoom-out-down" data-aos-duration="2000">Add to Cart</Button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={chid} alt="img" className="img-fluid w-100 h-100" data-aos="fade-left" data-aos-duration="2000"/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Shop;
