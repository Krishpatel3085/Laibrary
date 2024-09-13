import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./details.css";
import NavBar from "../NavBar/Nav";
import Footer from "../footer/Footer";
import professional from "../images/professional.jpg";
import { APi_URL } from "../../Utils/apiConfig";

function Details() {
  const { _id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APi_URL + `book/get1book/${_id}`);
        console.log("API Response:", response);
        if (response.data && response.data.data) {
          console.log("API Data:", response.data.data);
          setItem(response.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  if (!item) return <div>No data found</div>;

  return (
    <>
      <NavBar />

      <section id="contenet">
        <div className="detail-card py-5">
          <div className="container">
            <div className="row ">
              <div className="Img_url col-md-5">
                <img
                  src={APi_URL + "book/upload/" + item.url}
                  width={"500px"}
                  height={"auto"}
                  alt="img"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
              </div>
              <div
                className="share_menu col-md-7 p-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="detail-price">
                  <span className="text-secondary">
                    <strike>${item.price2}.00</strike>
                  </span>

                  <span className="text-danger fw-bold ">
                    <u>${item.price}.00</u>
                  </span>
                </div>
                <h2 className="text-start">{item.title}</h2>
                <p>{item.description}</p>
                <h5>
                  Share:
                  <span style={{ color: "#395692" }}>
                    <i class="bi bi-facebook"></i>
                  </span>
                  <span style={{ color: "#1c9dec" }}>
                    <i class="bi bi-twitter"></i>
                  </span>
                  <span style={{ color: "#0073af" }}>
                    <i class="bi bi-linkedin"></i>
                  </span>
                  <span style={{ color: "#334358" }}>
                    <i class="bi bi-instagram"></i>
                  </span>
                </h5>
                <hr />
                <p>
                  <span>
                    {" "}
                    <b> Author:</b> {item.author}
                  </span>{" "}
                  <br />
                  <span>
                    {" "}
                    <b> Language:</b> {item.language}
                  </span>
                </p>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active  text-dark"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{ fontSize: "18px" }}
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  style={{ fontSize: "18px" }}
                >
                  Additional information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ fontSize: "18px" }}
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
                data-aos="flip-up"
                data-aos-duration="3000"
                style={{ padding: "20px" }}
              >
                <h2 className="py-3 text-start">Description</h2>
                <p style={{ fontSize: "16px" }}>{item.description}</p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
                style={{ padding: "20px" }}
              >
                <h3 className="py-3">Additional information</h3>
                <table className="table">
                  <tbody className="border-1">
                    <tr style={{ background: "#f6f6f6", fontSize: "16px" }}>
                      <td>Weight</td>
                      <td>0.2Kg</td>
                    </tr>
                    <tr style={{ background: "#f6f6f6", fontSize: "16px" }}>
                      <td>Dimension</td>
                      <td>20*10*5 CM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
                style={{ padding: "20px" }}
              >
                <h4>Reviews</h4>
                <p>There are no reviews yet.</p>
                <p>Be the first to review “Bubbles In Water”</p>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <h6>Your rating *</h6>
                    <form action="#">
                      <label htmlFor="Your review *">Your review *</label>
                      <br />
                      <textarea
                        placeholder="Your review *"
                        className="form-control"
                        style={{ fontSize: "16px" }}
                      ></textarea>
                      <br />
                      <label htmlFor="rating">Name *</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        style={{ fontSize: "16px" }}
                      />
                      <br />
                      <label htmlFor="rating">Email *</label>
                      <br />
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        style={{ fontSize: "16px" }}
                      />
                      <div className="form-check py-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button type="button" className="btn btn-secondary">
                        Secondary
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <section id="writing">
        <div className="container py-5  mb-3">
          <div className="row overflow-hidden">
            <div
              className="col-md-6"
              data-aos="fade-down-left"
              data-aos-duration="3000"
            >
              <h6 className="author-title text-uppercase">About The Author</h6>
              <h2 className="author-quote text-start">
                "My enthusiasm for <br /> writing never stops" - <br /> John Doe
              </h2>
              <p className="author-description">
                Nullam venenatis neque dis viverra hendrerit faucibus ornare
                feugiat urna. Tristique sollicitudin penatibus velit a class
                auctor himenaeos. Mollis semper luctus sit efficitur nam vitae
                feugiat enim tortor. Tortor montes integer cras massa donec ex
                ligula. Aliquet fringilla tellus mattis augue nam dui justo
                aliquam quisque suspendisse maximus. Pede velit ut dapibus
                suspendisse vivamus pulvinar nostra morbi curae potenti netus.
              </p>
              <span className="author-link">
                View All My Book
              </span>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-down-right"
              data-aos-duration="3000"
            >
              <img
                src={professional}
                className="author-image w-100  img-fluid"
                alt="Author"
              />
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div
              className="flash_sale text-center text-light"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <p className="fw-bold">Flash SALE!</p>
              <h2 className="text-white">
                Flat 50% OFF, Hurry up before <br /> the stock ends
              </h2>
              <button className="shop_btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Details;
