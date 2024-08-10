import React from 'react';
import '../About/about.css';
import NavBar from '../NavBar/Nav';
import Footer from '../footer/Footer';
import Hand_book from "../images/hand_book.jpg";
import book2 from '../images/books-2.jpg';
import book3 from '../images/img_7.jpg';
import book4 from '../images/img_8.jpg';
import book5 from '../images/img_9.jpg';


import { useState, useEffect } from "react";
import review from "../images/customer_review.jpg";
import slide_1 from "../images/slider img-1.jpg"
import slide_2 from "../images/slider img-2.jpg"
import slide_3 from "../images/slider img-3.jpg"
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'; // Add the CSS for slick
import 'slick-carousel/slick/slick-theme.css';
function About() {

    useEffect(() => {
        $('.sliders').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });

        // Cleanup function to destroy the slider
        return () => {
            $('.sliders').slick('unslick');
        };
    }, []);

    return (
        <>
            <NavBar />
            <section id='AboutUs'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className='text-light text-center'><span>Home <span className='mx-3 '><i class="bi bi-book fs-5 "></i></span> About</span></h4>
                            <h2 className='text-center text-light'>About Us</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* second */}
            <div className="container pt-4">
                <div className="row text-center py-2">
                    <h2>Welcome to Bookarazi</h2>
                    <p>For bookworms, by passionate writers  </p>
                </div>
            </div>

            <div className="container " id='writers'  >
                <div className="welcome  mb-3" >
                    <div className="row px-4 pt-4">
                        <div className="col-md-6">
                            <p>Euismod magna dui sagittis curabitur convallis pulvinar. Mollis neque lacinia himenaeos eleifend sit justo convallis augue. Tellus rhoncus euismod vestibulum vehicula parturient sagittis laoreet conubia hac. Tortor faucibus sem facilisi efficitur amet fusce. Consequat facilisis taciti lorem conubia venenatis cursus odio egestas. Neque mattis dis est non augue. Feugiat sed velit ornare ad blandit semper erat congue integer consequat. </p>

                            <h4>  Porttitor consectetur ad sed vitae accumsan in maximus commodo semper iaculis. Vel sociosqu mattis quis eros neque fermentum justo bibendum amet.</h4>

                            <p>Dictum quam natoque ridiculus ligula pretium. Magna vel felis dolor nisi tristique viverra platea placerat imperdiet montes. Blandit penatibus imperdiet leo primis ipsum. Suscipit rutrum finibus vulputate ut mauris odio suspendisse libero. Urna cubilia metus sollicitudin dapibus condimentum molestie est vehicula netus sed efficitur.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Laoreet gravida congue aliquam etiam facilisi porta mollis. Platea feugiat a scelerisque imperdiet parturient enim venenatis vitae ut sed luctus. Nisl primis vulputate si interdum conubia sit cursus mollis enim. Lacus ridiculus nisi risus quam enim venenatis consectetuer libero lectus.</p>
                            <a href="#">  Discover More</a>
                            <img src={book2} className='w-100 h-50 img-fluid' />
                        </div>
                    </div>

                </div>
            </div>

            {/* third section */}
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

            {/* third */}
            <section className='py-5' style={{ background: "#f8f8f8" }}>
                <div className="container">
                    <div className="row">
                        <div className="danger-blog col-md-4">
                            <h6 className='text-uppercase'>The Team</h6>
                            <h2>Our <br />Creative <br />Team</h2>
                            <p>Volutpat placerat sollicitudin per tristique magnis iaculis arcu torquent turpis.</p>

                            <button className='btn btn-danger'>View All Member</button>
                        </div>
                        <div className="john-blog col-md-8 d-flex gap-4">
                            <div className="john">
                                <img src={book3} className='w-100 img-fluid ' id='img-blog' />
                                <div className="overlay">
                                    <p>John D. Black</p>
                                    <h6 >Director</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="john">
                                <img src={book5} className='w-100 img-fluid' id='img-blog' />
                                <div className="overlay">
                                    <p>Amanda Baughn</p>
                                    <h6 className=''>Author</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="john">
                                <img src={book4} className='w-100 img-fluid' id='img-blog' />
                                <div className="overlay">
                                    <p>Joehar</p>
                                    <h6 className=''>Author</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


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

            <div className="sliders">
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img src={slide_1} />
                </div>
                <div className="text mt-2 ">

                  <p className="text-secondary fs-5">	<i> "I don't always clop, but when I do, it's because of book. Thank you so much for your help. It's incredible. Thanks to book, we've just launched our 5th website!" </i> </p>

                  <h5>Richerd Berry</h5>
                  <span className="text-danger">Journalist</span>
                </div>
              </div>
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img src={slide_2} />
                </div>
                <div className="text mt-2 ">

                  <p className="text-secondary fs-5">	<i>  "I don't always clop, but when I do, it's because of book. Thank you so much for your help. It's incredible. Thanks to book, we've just launched our 5th website!" </i> </p>

                  <h5>Susan C.Rice</h5>
                  <span className="text-danger">Journalist</span>
                </div>
              </div>
              <div className="one d-flex gap-3 align-items-start p-2">
                <div className="imgs">
                  <img src={slide_3} />
                </div>
                <div className="text mt-2 ">

                  <p className="text-secondary fs-5">	<i> "I don't always clop, but when I do, it's because of book. Thank you so much for your help. It's incredible. Thanks to book, we've just launched our 5th website!" </i>  </p>

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
    )
}

export default About