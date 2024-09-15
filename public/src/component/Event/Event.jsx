import React from "react";
import "./event.css";
import "./EventMedia.css";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";

function Event() {
  return (
    <>
      <NavBar />

      <section id="event">
        <div className="container-fluid">
          <div className="row text-center ">
            <div className="col-md-12">
              <div className="upComing">
                <h4
                  className="text-light"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1500"
                >
                  Home{" "}
                  <span className="mx-3">
                    <i class="bi bi-book"></i>
                  </span>{" "}
                  Event
                </h4>
                <h2
                  className="text-center text-light pb-3 mb-2"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  Upcoming Events
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second  */}
      <div className="container">
        <div className="row py-5">
          <div className="Festival  col-md-12 text-center">
            <h6
              className="text-danger text-uppercase"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Event
            </h6>
            <h2 data-aos="flip-up" data-aos-duration="2000">
              Book promotions
            </h2>
            <p className="mb-2" data-aos="flip-up" data-aos-duration="2000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>

        <div className="row d-flex gap-3 py-2">
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <div className="books six_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">Festival of Books</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i>JCC, Jakarta
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i> May 14, 2024
              </li>
            </div>
          </div>
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <div className="books one_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">Guide presents a reading corner</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i>Istora GBK, Jakarta
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i>May 21, 2024
              </li>
            </div>
          </div>
        </div>

        <div className="row d-flex gap-3 py-2">
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <div className="books second_book six_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">Read free books in Jakarta</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i>JCC, Jakarta
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i>May 28, 2024
              </li>
            </div>
          </div>
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <div className="books third_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">Promotion Book</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i> ICE BSD, Tangerang
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i>June 4, 2024
              </li>
            </div>
          </div>
        </div>

        <div className="row d-flex gap-3 py-2">
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <div className="books four_book six_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">New Friends with Books</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i>JCC, Jakarta
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i> May 14, 2024
              </li>
            </div>
          </div>
          <div
            className="reading col-md-6 d-flex gap-3 p-0 mb-3"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            <div className="books five_book text-center">
              <button className="addCart">View More</button>
            </div>
            <div
              className="dolor"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <h2 className="text-start">Book Signing</h2>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <li>
                <i class="fa-solid fa-location-dot me-3"></i>Istora GBK, Jakarta
              </li>
              <li>
                <i class="fa-regular fa-clock me-2 "></i>May 21, 2024{" "}
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="container py-3">
        <div className="row py-3">
          <div className="question col-md-5">
            <h6
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Most popular questions
            </h6>
            <h2
              className="text-start"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Frequently asked <br /> questions
            </h2>
            <p  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar <br />
              dapibus leo.
            </p>
          </div>
          <div className="col-md-7">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Where Can I Find Information?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Imperdiet velit taciti at viverra rhoncus facilisis diam.
                    Hac gravida eget natoque rutrum sapien dis pretium libero.
                    Ut est lectus mus nisi fermentum montes dapibus eu. Auctor
                    fusce cubilia justo a lacinia. This is the first item's
                    accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What Are Your Terms And Conditions?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Imperdiet velit taciti at viverra rhoncus facilisis diam.
                    Hac gravida eget natoque rutrum sapien dis pretium libero.
                    Ut est lectus mus nisi fermentum montes dapibus eu. Auctor
                    fusce cubilia justo a lacinia. This is the second item's
                    accordion body. Let's imagine this being filled with some
                    actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Can I Buy Directly From The Factory?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Imperdiet velit taciti at viverra rhoncus facilisis diam.
                    Hac gravida eget natoque rutrum sapien dis pretium libero.
                    Ut est lectus mus nisi fermentum montes dapibus eu. Auctor
                    fusce cubilia justo a lacinia. This is the third item's
                    accordion body. Nothing more exciting happening here in
                    terms of content, but just filling up the space to make it
                    look, at least at first glance, a bit more representative of
                    how this would look in a real-world application.
                  </div>
                </div>
              </div>
              <div class="accordion-item"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What Kinds of Payment Do You Accept?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Imperdiet velit taciti at viverra rhoncus facilisis diam.
                    Hac gravida eget natoque rutrum sapien dis pretium libero.
                    Ut est lectus mus nisi fermentum montes dapibus eu. Auctor
                    fusce cubilia justo a lacinia. This is the fourth item's
                    accordion body. Nothing more exciting happening here in
                    terms of content, but just filling up the space to make it
                    look, at least at first glance, a bit more representative of
                    how this would look in a real-world application.
                  </div>
                </div>
              </div>
              <div class="accordion-item"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    When do I receive my order?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Imperdiet velit taciti at viverra rhoncus facilisis diam.
                    Hac gravida eget natoque rutrum sapien dis pretium libero.
                    Ut est lectus mus nisi fermentum montes dapibus eu. Auctor
                    fusce cubilia justo a lacinia. This is the fifth item's
                    accordion body. Nothing more exciting happening here in
                    terms of content, but just filling up the space to make it
                    look, at least at first glance, a bit more representative of
                    how this would look in a real-world application.
                  </div>
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
export default Event;
