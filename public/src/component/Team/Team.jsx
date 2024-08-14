import React from 'react';
import './team.css';
import './TeamMedia.css';
import NavBar from '../NavBar/Nav';
import Footer from '../footer/Footer';
import book3 from '../images/img_7.jpg';
import book4 from '../images/img_8.jpg';
import book5 from '../images/img_9.jpg';
import book1 from '../images/img_1.jpg';
import book2 from '../images/img_3.jpg';
import book6 from '../images/img_4.jpg';
import book7 from '../images/img_6.jpg';
import book8 from '../images/img_5.jpg';
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
      <section id='team'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4 className='text-light text-center'><span>Home <span className='mx-3 '><i class="bi bi-book fs-5 "></i></span> Team</span></h4>
              <h2 className='text-center text-light'>Meet Our Team</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <div className="container-fluid mb-4 py-5">
        <div className="container p-5 custom-container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={writing} className="img-fluid custom-img" />
            </div>
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
          </div>
        </div>
      </div>

      {/* Third Section */}
      <section id='team-member'>
        <div className="container">
          <div className="row py-3">
            <div className="next col-md-12 d-flex justify-content-between align-content-center">
              <h3>Creative team</h3>
              <span>
                <button className="author_btn fw-bold">Discover More</button>
              </span>
            </div>
          </div>

          {/* second row */}
          <div className="row d-flex ">
            <div className="col-md-3">
              <div className="john">
                <img src={book3} className='w-100 img-fluid ' id='img-blog' />
                <div className="overlay">
                  <p>John D. Black</p>
                  <h6 className=''>Director</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book5} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Amanda Baughn</p>
                  <h6>Author</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book4} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Joehar</p>
                  <h6>Author</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book1} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Luigi T. Elbert</p>
                  <h6>Marketing</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex py-4">
            <div className="col-md-3">
              <div className="john">
                <img src={book2} className='w-100 img-fluid ' id='img-blog' />
                <div className="overlay">
                  <p>Dennis Dunn</p>
                  <h6>Director</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book6} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Milissa H</p>
                  <h6>Journalist</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book7} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Sara J. Smith</p>
                  <h6>Marketing</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="john">
                <img src={book8} className='w-100 img-fluid' id='img-blog' />
                <div className="overlay">
                  <p>Alice Jackson</p>
                  <h6>Marketing</h6>
                  <div className="icon">
                    <i className='fab fa-twitter' id='icon'></i>
                    <i className="fab fa-facebook" id='icon'></i>
                    <i className='fab fa-instagram' id='icon'></i>
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


      <Footer />
    </>
  )
}

export default Team