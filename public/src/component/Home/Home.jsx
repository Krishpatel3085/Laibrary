import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import "../MediaQurey/media.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import service from "../images/24-hrs_service-1.png";
import fast from "../images/Fast_online_payment-1.png";
import delivery from "../images/Express_mail_service-1.png";
import refund from "../images/Product_refund-1.png";
import writing from "../images/hand_writing.jpg";
import Hand_book from "../images/hand_book.jpg";
import chid from "../images/father_book.png";
import read_book from "../images/read_book.jpg";
import one_book from "../images/one_book.jpg";
import second_book from "../images/second_book.jpg";
import third_book from "../images/young-woman.jpg";
import review from "../images/customer_review.jpg";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";

function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ldfs6814-8085.inc1.devtunnels.ms/book/getbook")
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
  
  return (
    <>
    <NavBar/>

      <div className="container-fluid">
        <div className="row">
          <div className="main-section">
            <div className="col-md-12">
              <div className="main_description d-grid">
                <div className="description">
                  <h6 className="text-white ms-2 mt-2">Sale Up To 20% OFF</h6>
                  <h1 className="text-white">
                    Grab your next <br /> favorite book
                  </h1>
                  <p className="text-white">
                    Books are the quietest and most constant of friends; they
                    are <br /> the most accessible and wisest of counselors, and
                    the most <br /> patient of teachers
                  </p>
                  <a
                    href="#target-section"
                    className="btn btn-primary go-to-button"
                  >
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i> Go to Shop{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="container" id="pading_id">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={delivery} />
                    </div>
                    <div className="info-section list-style-none">
                      <li>
                        <b>Free Delivery</b>
                      </li>
                      <li style={{ color: "#7A7A7A" }}>
                        For all member community
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={fast} />
                    </div>
                    <div className="info-section">
                      <li>
                        <b>Secure payments</b>
                      </li>
                      <li style={{ color: "#7A7A7A" }}>
                        Supports various payment
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={service} />
                    </div>
                    <div className="info-section">
                      <li>
                        <b>24/7 support</b>
                      </li>
                      <li style={{ color: "#7A7A7A" }}>Ready to serve you</li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={refund} />
                    </div>
                    <div className="info-section">
                      <li>
                        <b>7 Days Return</b>
                      </li>
                      <li style={{ color: "#7A7A7A" }}>7 Days Return</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4">
            <div className="Lorem">
              <div className="new_release">
                <h2 className="text-white">New Release</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit
                  dolor
                </p>
                <button className="shop_btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Lorem">
              <div className="new_release">
                <h2 className="text-white">Pre Order</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit
                  dolor
                </p>
                <button className="shop_btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Lorem">
              <div className="new_release">
                <h2 className="text-white">Best Seller</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit
                  dolor
                </p>
                <button className="shop_btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border-top py-3">
          <div className="next col-md-12 d-flex justify-content-between align-content-center">
            <h3>Discover Your Next Book</h3>
            <span>
              <a href="#">View All Book</a>
            </span>
          </div>
        </div>
        <div className="row pb-4">
          {items.map((item) => (
            <div className="col-md-3 col-lg-3" key={item._id}>
              <Card
                style={{ width: "auto", fontFamily: "lora" }}
                className="api_card border-0 text-center"
                onClick={() => handleImageClick(item._id)}
              >
                <Card.Img
                  variant="top"
                  className="card_sell_img img-fluid"
                  src={
                    "https://ldfs6814-8085.inc1.devtunnels.ms/book/upload/" +
                    item.url
                  }

                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>{item.author}</Card.Title>
                  <Card.Text>
                    <span className="text-dark fs-6">
                      <strike>${item.price2}.00</strike>
                    </span>
                    <span className="text-danger fw-bold fs-5">
                      <u>${item.price}.00</u>
                    </span>
                  </Card.Text>
                  <Button className="add_to_cart">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* // third section */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="flash_sale text-center text-light">
              <p className="fw-bold">Flash SALE!</p>
              <h2>
                Flat 50% OFF, Hurry up before <br /> the stock ends
              </h2>
              <button className="shop_btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* four section */}
      <div className="container-fluid mb-4">
        <div className="container p-5 custom-container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about_author">
                <h6 className="text-danger">About Author</h6>
                <h2 className="text-dark ">
                  Writing books makes the world go round
                </h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
                <p className="mt-2">
                  Interdum donec fringilla consectetuer senectus proin odio
                  ultricies tincidunt. Leo molestie bibendum eget aenean
                  vulputate taciti proin volutpat purus.
                </p>
              </div>
              <button className="author_btn fw-bold">Discover More</button>
            </div>
            <div className="col-md-6">
              <img src={writing} className="img-fluid custom-img" />
            </div>
          </div>
        </div>
      </div>

      {/* five section */}
      <div class="container">
        <div class="row py-5">
          <div class="col-md-6 col-lg-6">
            <img
              src={Hand_book}
              class="img-fluid custom-img h-100 w-100"
              alt="Handbook"
            />
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="content ps-3">
              <h2>
                It is more than just <br /> writing books
              </h2>
              <p className="text-dark fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-rocket text-danger mb-2"></i>
                  <span>Publishing</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-cart-arrow-down text-danger mb-2"></i>
                  <span>Selling Book</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-book text-danger mb-2"></i>
                  <span>Editing</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-users text-danger mb-2"></i>
                  <span>Community</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* setion six */}
      <section className="mb-3" id="back_images">
        <div className="container  d-flex align-items-center ">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="lectus">
                <h6 className="text-uppercase font-weight-bold mb-3 text-danger">
                  New Release
                </h6>
                <h3 className="font-weight-bold mb-3">Me & My Dad</h3>
                <h5 className="font-italic mb-4">
                  A novelette book by John Doe
                </h5>
                <p className="text-justify mb-4">
                  Morbi proin condimentum litora duis lectus vivamus parturient
                  torquent. Phasellus fames lectus molestie iaculis lacus
                  condimentum duis. Ac ligula etiam magna efficitur quisque in.
                  Malesuada mattis integer congue nulla id ipsum vestibulum
                  mollis fames neque dictum. Ex vivamus vehicula natoque porta
                  ipsum dis. Interdum viverra semper dolor dignissim urna
                  habitasse orci. Elementum ullamcorper libero magna montes ut
                  orci suspendisse magnis nam id ligula.
                </p>
                <span className="font-weight-bold mb-2 d-block fs-3">
                  Price : <span className="text-danger fs-3"> $40.00</span>{" "}
                </span>
                <Button className="add_to_cart">Add to Cart</Button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={chid} className="img-fluid w-100 h-100" />
            </div>
          </div>
        </div>
      </section>

      {/* seven section */}
      <div className="container py-4">
        <div className="row py-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h2 className="text-dark">Blog & News</h2>
            <button className="btn btn-danger">View All Articles</button>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-6">
            <img
              src={read_book}
              alt="Read Book"
              className="w-100 img-fluid"
              id="read_book"
            />
            <h5 className="py-3">How to Get Started on Bookstagram in 2022</h5>
            <h6 className="text-danger py-2">May 10, 2022 ~ No Comments</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur
            </p>
            <a href="#" className="text-decoration-none text-dark">
              Continue Reading »
            </a>
          </div>

          <div className="col-md-6">
            <div className="row pb-5">
              <div className="col-4">
                <img
                  src={one_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8">
                <h5>How to Get Started on Bookstagram in 2022</h5>
                <span className="text-danger fs-6">
                  May 10, 2022 ~ No Comments
                </span>
                <p className="py-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>

            <div className="row pb-5">
              <div className="col-4">
                <img
                  src={second_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8">
                <h5>How to Get Started on Bookstagram in 2022</h5>
                <span className="text-danger fs-6">
                  May 10, 2022 ~ No Comments
                </span>
                <p className="py-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-4">
                <img
                  src={third_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8">
                <h5>How to Get Started on Bookstagram in 2022</h5>
                <span className="text-danger fs-6">
                  May 10, 2022 ~ No Comments
                </span>
                <p className="py-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eight section */}
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <img src={review} className="img-fluid w-100 " id="review_img" />
          </div>
          <div className=" col-md-6">
            <h6 className="text-danger text-capitalize">Testimonials </h6>
            <h2>Customer Reviews</h2>
            <p>
              Porttitor eleifend facilisi euismod litora etiam consectetur.
              Vivamus platea quisque mauris si blandit diam id a primis
              himenaeos. Natoque vulputate duis nec mauris tristique integer mi.
              Pharetra libero quam morbi lectus lacinia. Pharetra lacus ut
              litora mattis cras arcu tortor bibendum vitae.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
