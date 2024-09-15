import React from "react";
import "../About/about.css";
import "./AboutMedia.css";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";
import Hand_book from "../images/hand_book.jpg";
import book2 from "../images/books-2.jpg";
import book3 from "../images/img_7.jpg";
import book4 from "../images/img_8.jpg";
import book5 from "../images/img_9.jpg";

import { useEffect } from "react";
import review from "../images/customer_review.jpg";
import slide_1 from "../images/slider img-1.jpg";
import slide_2 from "../images/slider img-2.jpg";
import slide_3 from "../images/slider img-3.jpg";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css"; // Add the CSS for slick
import "slick-carousel/slick/slick-theme.css";
function About() {
  useEffect(() => {
    $(".sliders").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <section id="AboutUs">
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
                  <span className="mx-3 ">
                    <i class="bi bi-book fs-5 "></i>
                  </span>{" "}
                  About
                </span>
              </h4>
              <h2
                className="text-center text-light"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                About Us
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* second */}
      <div className="container pt-4">
        <div className="row text-center py-2 overflow-hidden">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="2000"
          >
            Welcome to Bookarazi
          </h2>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="2000"
          >
            For bookworms, by passionate writers{" "}
          </p>
        </div>
      </div>

      <div className="container " id="writers">
        <div className="welcome  mb-3">
          <div className="row px-4 pt-4 overflow-hidden">
            <div className="col-md-6">
              <p data-aos="fade-down" data-aos-duration="2000">
                Euismod magna dui sagittis curabitur convallis pulvinar. Mollis
                neque lacinia himenaeos eleifend sit justo convallis augue.
                Tellus rhoncus euismod vestibulum vehicula parturient sagittis
                laoreet conubia hac. Tortor faucibus sem facilisi efficitur amet
                fusce. Consequat facilisis taciti lorem conubia venenatis cursus
                odio egestas. Neque mattis dis est non augue. Feugiat sed velit
                ornare ad blandit semper erat congue integer consequat.{" "}
              </p>

              <h4 data-aos="fade-down" data-aos-duration="2000">
                {" "}
                Porttitor consectetur ad sed vitae accumsan in maximus commodo
                semper iaculis. Vel sociosqu mattis quis eros neque fermentum
                justo bibendum amet.
              </h4>

              <p data-aos="fade-down" data-aos-duration="2000">
                Dictum quam natoque ridiculus ligula pretium. Magna vel felis
                dolor nisi tristique viverra platea placerat imperdiet montes.
                Blandit penatibus imperdiet leo primis ipsum. Suscipit rutrum
                finibus vulputate ut mauris odio suspendisse libero. Urna
                cubilia metus sollicitudin dapibus condimentum molestie est
                vehicula netus sed efficitur.
              </p>
            </div>
            <div className="col-md-6">
              <p data-aos="fade-left" data-aos-duration="2000">
                Laoreet gravida congue aliquam etiam facilisi porta mollis.
                Platea feugiat a scelerisque imperdiet parturient enim venenatis
                vitae ut sed luctus. Nisl primis vulputate si interdum conubia
                sit cursus mollis enim. Lacus ridiculus nisi risus quam enim
                venenatis consectetuer libero lectus.
              </p>
              <span> Discover More</span>
              <img
                src={book2}
                alt="img"
                className="w-100 h-50 img-fluid"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div class="container">
        <div class="row py-5 overflow-hidden">
          <div class="col-md-6 col-lg-6">
            <img
              src={Hand_book}
              class="img-fluid custom-img h-100 w-100"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              alt="Handbook"
            />
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="content ps-3">
              <h2
                className="text-start"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                It is more than just <br /> writing books
              </h2>
              <p
                className="text-dark fs-6"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div class="row">
                <div
                  class="col-md-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <i class="fa-solid fa-rocket text-danger mb-2"></i>
                  <span>Publishing</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
                <div
                  class="col-md-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <i class="fa-solid fa-cart-arrow-down text-danger mb-2"></i>
                  <span>Selling Book</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <i class="fa-solid fa-book text-danger mb-2"></i>
                  <span>Editing</span>
                  <p>
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
                <div
                  class="col-md-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
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

      {/* Four Section */}
      <section className="py-5" style={{ background: "#f8f8f8" }}>
        <div className="container">
          <div className="row overflow-hidden">
            <div className="danger-blog col-md-4">
              <h6
                className="text-uppercase"
                data-aos="fade-down-right"
                data-aos-duration="2000"
              >
                The Team
              </h6>
              <h2
                className="text-start"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                Our <br />
                Creative <br />
                Team
              </h2>
              <p data-aos="fade-up-right" data-aos-duration="2000">
                Volutpat placerat sollicitudin per tristique magnis iaculis arcu
                torquent turpis.
              </p>

              <button
                className="btn btn-danger"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                View All Member
              </button>
            </div>

            <div className="john-blog col-md-8 d-flex gap-4">
              <div
                className="john"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <img
                  src={book3}
                  alt="img"
                  className="w-100 img-fluid "
                  id="img-blog"
                />
                <div className="overlay">
                  <p data-aos="zoom-in-right" data-aos-duration="2000">
                    John D. Black
                  </p>
                  <h6 data-aos="zoom-in-right" data-aos-duration="2000">
                    Director
                  </h6>
                  <div
                    className="icon"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div
                className="john"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <img
                  src={book5}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p data-aos-duration="2000">Amanda Baughn</p>
                  <h6  data-aos-duration="2000">Author</h6>
                  <div className="icon"  
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div
                className="john"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <img
                  src={book4}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p data-aos="zoom-in-right" data-aos-duration="2000">Joehar</p>
                  <h6 className="" data-aos="zoom-in-right" data-aos-duration="2000">Author</h6>
                  <div className="icon"  
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five section */}
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={review}
              alt="img"
              className="img-fluid w-100 "
              id="review_img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="col-md-6">
            <h6
              className="text-danger text-capitalize"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Testimonials{" "}
            </h6>
            <h2
              className="text-start"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom "
              data-aos-duration="2000"
            >
              Customer Reviews
            </h2>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Porttitor eleifend facilisi euismod litora etiam consectetur.
              Vivamus platea quisque mauris si blandit diam id a primis
              himenaeos. Natoque vulputate duis nec mauris tristique integer mi.
              Pharetra libero quam morbi lectus lacinia. Pharetra lacus ut
              litora mattis cras arcu tortor bibendum vitae.
            </p>

            <div className="sliders">
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img
                    src={slide_1}
                    alt="img"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                  />
                </div>
                <div className="text mt-2">
                  <p
                    className="text-secondary fs-5"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                  >
                    {" "}
                    <i>
                      {" "}
                      "I don't always clop, but when I do, it's because of book.
                      Thank you so much for your help. It's incredible. Thanks
                      to book, we've just launched our 5th website!"{" "}
                    </i>{" "}
                  </p>

                  <h5>Richerd Berry</h5>
                  <span className="text-danger">Journalist</span>
                </div>
              </div>
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img src={slide_2} alt="img" />
                </div>
                <div className="text mt-2 ">
                  <p
                    className="text-secondary fs-5"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                  >
                    {" "}
                    <i>
                      {" "}
                      "I don't always clop, but when I do, it's because of book.
                      Thank you so much for your help. It's incredible. Thanks
                      to book, we've just launched our 5th website!"{" "}
                    </i>{" "}
                  </p>

                  <h5>Susan C.Rice</h5>
                  <span className="text-danger">Journalist</span>
                </div>
              </div>
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img src={slide_3} alt="img" />
                </div>
                <div className="text mt-2 ">
                  <p className="text-secondary fs-5">
                    {" "}
                    <i>
                      {" "}
                      "I don't always clop, but when I do, it's because of book.
                      Thank you so much for your help. It's incredible. Thanks
                      to book, we've just launched our 5th website!"{" "}
                    </i>{" "}
                  </p>

                  <h5>Gary E</h5>
                  <span className="text-danger">Journalist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
