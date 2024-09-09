import React from "react";
import "./footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 py-5">
              <h2 className="text-center text-white" data-aos="fade-down" data-aos-duration="2000">Sign Up for Our NEwsletter</h2>
              <h6 className="text-center" data-aos="fade-down" data-aos-duration="2000">
                Fermentum tempor cubilia risus tellus massa dis consectetur
                dolor.
              </h6>
              <br />
              <Form className="d-flex gap-2 justify-content-center flex-wrap" data-aos="fade-left" data-aos-duration="2000">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="mail "
                  />
                </Form.Group>
                <div className="d-grid gap-2 button mb-3">
                  <Button variant="" size="md" className="text-white ">
                    SUBSCRIBE
                  </Button>

                </div>
              </Form>
                  <hr className="bg-secondary " style={{height:"2px"}} />
            </div>
          </div>
          <div className="row mt-5" id='story'>
            <div className="col-md-3 col-sm-6"  data-aos="zoom-out-right" data-aos-duration="2000">
              <h4>Know More</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="-">About Us</a>
                </li>
                <li>
                  <a href="-">Company Story</a>
                </li>
                <li>
                  <a href="-">Our blog</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6"  data-aos="zoom-out-right"  data-aos-duration="2000">
              <h4>Shop </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="-">Books</a>
                </li>
                <li>
                  <a href="-">Order Status</a>
                </li>
                <li>
                  <a href="-">Coupon</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6"  data-aos="zoom-out-left"  data-aos-duration="2000">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="-">Meet our Authors</a>
                </li>
                <li>
                  <a href="-">Contact Form</a>
                </li>
                <li>
                  <a href="-">FAQS</a>
                </li>
                <li>
                  <a href="-">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 " data-aos="zoom-out-left"  data-aos-duration="2000">
              <h4>Stay Connected</h4>
              <p>Stay connected and get interesting news & coupon</p>
              <ul className="list-unstyled icon d-flex gap-2 text-center justify-content-center">
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-youtube"></i>
                </li>

                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Copyright © 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}