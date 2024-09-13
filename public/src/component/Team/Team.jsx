import React from "react";
import "./team.css";
import "./TeamMedia.css";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";
import book3 from "../images/img_7.jpg";
import book4 from "../images/img_8.jpg";
import book5 from "../images/img_9.jpg";
import book1 from "../images/img_1.jpg";
import book2 from "../images/img_3.jpg";
import book6 from "../images/img_4.jpg";
import book7 from "../images/img_6.jpg";
import book8 from "../images/img_5.jpg";
import writing from "../images/hand_writing.jpg";
import read_book from "../images/read_book.jpg";
import one_book from "../images/one_book.jpg";
import second_book from "../images/second_book.jpg";
import third_book from "../images/young-woman.jpg";

function Team() {
  return (
    <>
      <NavBar />
      {/* first section */}
      <section id="team">
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
                  Team
                </span>
              </h4>
              <h2
                className="text-center text-light"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
              >
                Meet Our Team
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <div className="container-fluid mb-4">
        <div className="container p-5 custom-container">
          <div className="row align-items-center overflow-hidden">
            <div className="col-md-6">
              <div className="about_author">
                <h6
                  className="text-danger"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  About Author
                </h6>
                <h2
                  className="text-dark text-start"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  Writing books makes the world go round
                </h2>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="2000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
                <p
                  className="mt-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="2000"
                >
                  Interdum donec fringilla consectetuer senectus proin odio
                  ultricies tincidunt. Leo molestie bibendum eget aenean
                  vulputate taciti proin volutpat purus.
                </p>
              </div>
              <button
                className="author_btn fw-bold"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="2000"
              >
                Discover More
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={writing}
                alt="img"
                className="img-fluid custom-img"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <section id="team-member">
        <div className="container">
          <div className="row py-3">
            <div className="next col-md-12 d-flex justify-content-between align-content-center">
              <h3 data-aos="fade-down" data-aos-duration="2000">
                Creative team
              </h3>
              <span>
                <button
                  className="author_btn fw-bold"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Discover More
                </button>
              </span>
            </div>
          </div>

          {/* second row */}
          <div className="row d-flex overflow-hidden">
            <div className="col-md-3">
              <div
                className="john"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <img
                  src={book3}
                  alt="img"
                  className="w-100 img-fluid "
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">John D. Black</p>
                  <h6    data-aos="zoom-in-right" data-aos-duration="2000">Director</h6>
                  <div className="icon" 
                    data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="john"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <img
                  src={book5}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Amanda Baughn</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Author</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="john"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <img
                  src={book4}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Joehar</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Author</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="john"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="800"
              >
                <img
                  src={book1}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Luigi T. Elbert</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Marketing</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex py-4 overflow-hidden">
            <div className="col-md-3">
              <div className="john">
                <img
                  src={book2}
                  alt="img"
                  className="w-100 img-fluid "
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Dennis Dunn</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Director</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img
                  src={book6}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Milissa H</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Journalist</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img
                  src={book7}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Sara J. Smith</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Marketing</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img
                  src={book8}
                  alt="img"
                  className="w-100 img-fluid"
                  id="img-blog"
                />
                <div className="overlay">
                  <p  data-aos="zoom-in-right" data-aos-duration="2000">Alice Jackson</p>
                  <h6  data-aos="zoom-in-right" data-aos-duration="2000">Marketing</h6>
                  <div className="icon" data-aos="fade-up"
                    data-aos-duration="3000">
                    <i className="fab fa-twitter" id="icon"></i>
                    <i className="fab fa-facebook" id="icon"></i>
                    <i className="fab fa-instagram" id="icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Section */}
      <div className="container py-4">
        <div className="row py-3">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h2 className="text-dark" data-aos="fade-down" data-aos-duration="2000">Blog & News</h2>
            <button className="btn btn-danger" data-aos="fade-down" data-aos-duration="2000">View All Articles</button>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-6">
            <img
              src={read_book}
              alt="Read Book"
              className="w-100 img-fluid"
              id="read_book"  data-aos="flip-up" data-aos-duration="2000"
            />
            <h5 className="py-3"  data-aos="flip-up" data-aos-duration="2000">How to Get Started on Bookstagram in 2022</h5>
            <h6 className="text-danger py-2"  data-aos="flip-up" data-aos-duration="2000">May 10, 2022 ~ No Comments</h6>
            <p  data-aos="flip-up">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur.
            </p>
            <span className="text-decoration-none text-dark"  data-aos="flip-up" data-aos-duration="2000">
              Continue Reading »
            </span>
          </div>

          <div className="col-md-6" >
            <div className="row ">
              <div className="col-4" data-aos="zoom-out" data-aos-duration="2000">
                <img
                  src={one_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8" data-aos="zoom-out" data-aos-duration="2000">
                <h5>How to Get Started on Bookstagram in 2022</h5>
                <span className="text-danger fs-6">
                  May 10, 2022 ~ No Comments
                </span>
                <p className="py-2" >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-4" data-aos="zoom-out" data-aos-duration="2000">
                <img
                  src={second_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8" data-aos="zoom-out" data-aos-duration="2000">
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

            <div className="row pt-3 ">
              <div className="col-4" data-aos="zoom-out" data-aos-duration="2000">
                <img
                  src={third_book}
                  alt="One Book"
                  className="img-fluid "
                  id="comment"
                />
              </div>
              <div className="Bookstagram col-8" data-aos="zoom-out" data-aos-duration="2000">
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

      <Footer />
    </>
  );
}

export default Team;
