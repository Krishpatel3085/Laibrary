import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './home.css';
import '../MediaQurey/media.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import service from '../images/24-hrs_service-1.png';
import fast from '../images/Fast_online_payment-1.png';
import delivery from '../images/Express_mail_service-1.png';
import refund from '../images/Product_refund-1.png';
import writing from '../images/hand_writing.jpg';
import Hand_book from '../images/hand_book.jpg'
import chid from '../images/father_book.png'

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get("https://ldfs6814-8085.inc1.devtunnels.ms/")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="main-section">
            <div className="col-md-12">
              <div className="main_description d-grid">
                <div className="description">
                  <h6 className="text-white ms-2 mt-2">Sale Up To 20% OFF</h6>
                  <h1 className="text-white">Grab your next <br /> favorite book</h1>
                  <p className="text-white">Books are the quietest and most constant of friends; they are <br /> the most accessible and wisest of counselors, and the most <br /> patient of teachers</p>
                  <a href="#target-section" className="btn btn-primary go-to-button"> <i className="fa-solid fa-cart-shopping"></i> Go to Shop </a>
                </div>
              </div>
            </div>
            <div className="container" id='pading_id'>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={delivery} />
                    </div>
                    <div className="info-section list-style-none">
                      <li><b>Free Delivery</b></li>
                      <li style={{ color: "#7A7A7A" }}>For all member community</li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={fast} />
                    </div>
                    <div className="info-section">
                      <li><b>Secure payments</b></li>
                      <li style={{ color: "#7A7A7A" }}>Supports various payment</li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="delivery d-flex align-items-center justify-content-center">
                    <div className="icon_bar pt-1">
                      <img src={service} />
                    </div>
                    <div className="info-section">
                      <li><b>24/7 support</b></li>
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
                      <li><b>7 Days Return</b></li>
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
                <h2 className='text-white'>New Release</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit dolor</p>
                <button className='shop_btn'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Lorem">
              <div className="new_release">
                <h2 className='text-white'>Pre Order</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit dolor</p>
                <button className='shop_btn'>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Lorem">
              <div className="new_release">
                <h2 className='text-white'>Best Seller</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit dolor</p>
                <button className='shop_btn'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border-top py-3">
          <div className="next col-md-12 d-flex ">
            <span >Discover Your Next Book</span>
            <span>View All Book</span>
          </div>
        </div>
        <div className="row pb-4">
          {
            items.map((item, index) => {
              return (
                <>
                  <div className="col-md-3 col-lg-3 " key={index}>
                    <Card style={{ width: 'auto', fontFamily: "lora" }} className='api_card border-0  text-center ' >
                      <Card.Img
                        variant="top"
                        className='card_sell_img img-fluid '
                        src={'https://ldfs6814-8085.inc1.devtunnels.ms/upload/' + item.url}
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Title>{item.author}</Card.Title>
                        <Card.Text >
                          <span className='text-dark fs-6'><strike>${item.price2}.00</strike></span> <span className='text-danger fw-bold fs-5'><u>${item.price}.00</u></span>
                        </Card.Text>
                        <Button className='add_to_cart'>Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              )
            })
          }
        </div>

      </div>


      {/* // third section */}
       <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="flash_sale text-center text-light">
              <p className='fw-bold'>Flash SALE!</p>
              <h2>Flat 50% OFF, Hurry up before <br /> the stock ends</h2>
              <button className='shop_btn'>Shop Now</button>
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
                <h6 className='text-danger'>About Author</h6>
                <h2 className='text-dark '>Writing books makes the world go round</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                <p className='mt-2'>Interdum donec fringilla consectetuer senectus proin odio ultricies tincidunt. Leo molestie bibendum eget aenean vulputate taciti proin volutpat purus.</p>
              </div>
              <button className='author_btn fw-bold'>Discover More</button>
            </div>
            <div className="col-md-6">
              <img src={writing} className='img-fluid custom-img' />
            </div>
          </div>
        </div>
      </div> 

      {/* five section */}
      <div class="container">
        <div class="row py-5">
          <div class="col-md-6 col-lg-6">
            <img src={Hand_book} class="img-fluid custom-img h-100 w-100" alt="Handbook" />
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="content ps-3">
              <h2>It is more than just <br /> writing books</h2>
              <p className='text-dark fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-rocket text-danger mb-2"></i>
                  <span>Publishing</span>
                  <p>Maecenas etiam platea et hac viverra aliquam magnis sapien.</p>
                </div>
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-cart-arrow-down text-danger mb-2"></i>
                  <span>Selling Book</span>
                  <p>Maecenas etiam platea et hac viverra aliquam magnis sapien.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-book text-danger mb-2"></i>
                  <span>Editing</span>
                  <p>Maecenas etiam platea et hac viverra aliquam magnis sapien.</p>
                </div>
                <div class="col-md-6 mb-4">
                  <i class="fa-solid fa-users text-danger mb-2"></i>
                  <span>Community</span>
                  <p>Maecenas etiam platea et hac viverra aliquam magnis sapien.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* setion six */}
      <section className='mb-3' id='back_images' >
        <div className="container">
          <div className="container">
          </div><div className="row">
            <div className="col-md-6">
              <h6>New Release</h6>
              <h3>Me & My Dad </h3>
              <h5>A novelette book by John Doe</h5>
              <p>Morbi proin condimentum litora duis lectus vivamus parturient torquent. Phasellus fames lectus molestie iaculis lacus condimentum duis. Ac ligula etiam magna efficitur quisque in. Malesuada mattis integer congue nulla id ipsum vestibulum mollis fames neque dictum. Ex vivamus vehicula natoque porta ipsum dis. Interdum viverra semper dolor dignissim urna habitasse orci. Elementum ullamcorper libero magna montes ut orci suspendisse magnis nam id ligula.</p>
              <span>Price :$40.00</span><br />
              <Button className='add_to_cart'>Add to Cart</Button>
            </div>
            <div className="col-md-6">
              <img src={chid}  className='img-fluid w-100 h-100'/>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;