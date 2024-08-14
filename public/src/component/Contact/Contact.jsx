import React from "react";
import "./contact.css";
import "./ContactMedia.css";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
      <NavBar />

      {/* first section */}
      <section id="event">
        <div className="container-fluid mb-2">
          <div className="row text-center ">
            <div className="col-md-12">
              <div className="upComing">
                <h4 className="text-light text-center">
                  <span>
                    Home{" "}
                    <span className="mx-3 ">
                      <i class="bi bi-book fs-5 "></i>
                    </span>{" "}
                    Contact
                  </span>
                </h4>
                <h2 className="text-center text-light">Keep In Touch</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      {/* second section */}
      <div className="container py-3">
        <div className="row d-flex justify-content-center gap-4 align-content-center">
          <div className="send_bar col-md-4">
            <h3>
              <i class="fa-regular fa-paper-plane"></i>
            </h3>
            <h4>Bookstore Central</h4>
            <p>
              Jln Cempaka Wangi No 22, <br /> Jakarta - Indonesia
            </p>
          </div>
          <div className="send_bar col-md-4">
            <h3>
              <i class="fa-regular fa-building"></i>
            </h3>
            <h4>Publishing Office</h4>
            <p>
              Jln RA Kartini Blok B8 No.12,
              <br /> Tangerang - Indonesia
            </p>
          </div>

          <div className="send_bar col-md-4">
            <h3>
              <i class="bi bi-telephone"></i>
            </h3>
            <h4>Phone / FAX</h4>
            <p>
              +6221.2002.2012 <br /> +6221.2002.2012
            </p>
          </div>

          <div className="send_bar col-md-4">
            <h3>
              <i class="fa-regular fa-envelope"></i>
            </h3>
            <h4>Email Address</h4>
            <p>
              support@yourdomain.tld <br /> sales@yourdomain.tld
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div
        className="container my-5"
        style={{ background: "#f8f8f8", borderRadius: "20px" }}
      >
        <div className="row">
          <div className="col-md-6 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289177.0732720988!2d72.41493388340731!3d23.02047409694801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1722940937079!5m2!1sen!2sin"
              width={600}
              height={500}
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>
          <div className="maping col-md-6">
            <h6 className="text-uppercase">Send us a message</h6>
            <h2>We will be in touch shortly</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control rounded-pill border-0"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control rounded-pill border-0"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control rounded-pill border-0"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control rounded-pill border-0"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <textarea
                  name="Message"
                  className="form-control rounded border-0"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="form-control rounded-pill border-0 text-light"
              id="submit"
            >
              <i class="fa-solid fa-envelope-open-text me-2"></i> Send My
              Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
