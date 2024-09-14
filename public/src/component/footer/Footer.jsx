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
              <h2
                className="text-center text-white"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Sign Up for Our NEwsletter
              </h2>
              <h6
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Fermentum tempor cubilia risus tellus massa dis consectetur
                dolor.
              </h6>
              <br />
              <Form
                className="d-flex gap-2 justify-content-center flex-wrap"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
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
              <hr className="bg-secondary " style={{ height: "2px" }} />
            </div>
          </div>
          <div className="row mt-5" id="story">
            <div
              className="col-md-3 col-sm-6"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <h4>Know More</h4>
              <ul className="list-unstyled">
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Company Story</span>
                </li>
                <li>
                  <span>Our blog</span>
                </li>
              </ul>
            </div>

            <div
              className="col-md-3 col-sm-6"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <h4>Shop </h4>
              <ul className="list-unstyled">
                <li>
                  <span>Books</span>
                </li>
                <li>
                  <span>Order Status</span>
                </li>
                <li>
                  <span>Coupon</span>
                </li>
              </ul>
            </div>

            <div
              className="col-md-3 col-sm-6"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            >
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <span>Meet our Authors</span>
                </li>
                <li>
                  <span>Contact Form</span>
                </li>
                <li>
                  <span>FAQS</span>
                </li>
                <li>
                  <span>Privacy Policy</span>
                </li>
              </ul>
            </div>

            <div
              className="col-md-3 col-sm-6 "
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            >
              <h4>Stay Connected</h4>
              <p>Stay connected and get interesting news & coupon</p>
              <ul className="list-unstyled icon d-flex gap-2 text-center "  data-aos="fade-up"
     data-aos-duration="2000">
                <li>
                  <i class="fa-brands fa-facebook-f"   data-aos="fade-down"  data-aos-duration="3000"></i>
                </li>
                <li>
                  <i class="fa-brands fa-twitter"   data-aos="fade-down"  data-aos-duration="3000"></i>
                </li>
                <li>
                  <i class="fa-brands fa-youtube"   data-aos="fade-down"  data-aos-duration="3000"></i>
                </li>
                <li>
                  <i class="fa-brands fa-instagram"   data-aos="fade-down"  data-aos-duration="3000"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p
                className="text-center"
              >
                Copyright © 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
