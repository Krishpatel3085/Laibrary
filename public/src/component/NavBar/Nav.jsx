import React, { useEffect, useState } from "react";
import "./nav.css";
import logo_main from "../images/main_logo.jpg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { APi_URL } from "../../Utils/apiConfig";

function NavBar() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleNavigation = (path, name) => {
    navigate(path);
    setActive(name);
  };

  const gotocheckout = () => {
    navigate("/checkout");
  };

  const gotologout = () => {
    Cookies.remove("User-username");
    Cookies.remove("User-userEmail");
    setUser(""); // Clear user state on logout
    navigate("/login");
  };

  const gotologin = () => {
    navigate("/login");
  };

  const gotoAdminlogin = () => {
    navigate("/adminlogin");
  };

  useEffect(() => {
    const userName = Cookies.get("User-username");
    setUser(userName || ""); // Set user state from cookies if available

    axios
      .get(APi_URL + "user/get")
      .then((response) => {
        // Optionally update user data from API if needed
        // setUser(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <Navbar expand="lg" className="navbar position-fixed w-100 p-2">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand>
          <img src={logo_main} id="user_main_logo" alt="Main Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center gap-3" navbarScroll>
            <Nav.Link
              onClick={() => handleNavigation("/ ", "home")}
              className={`navbar__link ${active === "home" ? "active" : ""}`}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/about", "about")}
              className={`navbar__link ${active === "about" ? "active" : ""}`}
            >
              ABOUT US
            </Nav.Link>
            <NavDropdown title="PAGES" id="navbarScrollingDropdown" className="navbar__link">
              <NavDropdown.Item
                onClick={() => handleNavigation("/team", "team")}
                className={`navbar__dropdown-link ${active === "team" ? "active" : ""}`}
              >
                TEAM
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavigation("/contact", "contact")}
                className={`navbar__dropdown-link ${active === "contact" ? "active" : ""}`}
              >
                CONTACT
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavigation("/blog", "blog")}
                className={`navbar__dropdown-link ${active === "blog" ? "active" : ""}`}
              >
                BLOG
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => handleNavigation("/event", "event")}
              className={`navbar__link ${active === "event" ? "active" : ""}`}
            >
              EVENT
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavigation("/shop", "shop")}
              className={`navbar__link ${active === "shop" ? "active" : ""}`}
            >
              SHOP
            </Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder=" Search...."
              className="me-2 rounded-pill"
              aria-label="Search"
              style={{ background: "#f8f8f8" }}
            />
          </Form>
          <Nav>
            <Nav.Link href="#addToCart" className="me-3" onClick={gotocheckout}>
              <span className="shopping_icon">
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
            </Nav.Link>

            <NavDropdown
              title={
                <span className="userData">
                  Hi! {user} <i className="bi bi-person-circle"></i>
                </span>
              }
              id="profileDropdown"
              alignRight
            >
              <NavDropdown.Item onClick={gotologin}>
                <i className="bi bi-person-circle"></i> &nbsp;User Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={gotoAdminlogin}>
                <i className="bi bi-person-circle"></i> &nbsp;Admin Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={gotologout}>
                <i className="fa-solid fa-right-to-bracket"></i> &nbsp; Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
