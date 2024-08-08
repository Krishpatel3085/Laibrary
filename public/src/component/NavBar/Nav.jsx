import React, { useState, useEffect } from "react";
import "./nav.css";
import logo_main from "../images/main_logo.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  const handleNavigation = (path, name) => {
    navigate(path);
    setActive(name);
  };

    const gotocheckout = () =>{
      navigate('/checkout')
  }
  return (
    <Navbar expand="lg" className="navbar position-fixed w-100">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand href="#">
          <img src={logo_main} id="main_logo" alt="Main Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center gap-3"
            navbarScroll
          >
            <Nav.Link
              onClick={() => handleNavigation("/home", "home")}
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
            <NavDropdown
              title="PAGES"
              id="navbarScrollingDropdown"
              className="navbar__link"
            >
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
              placeholder="Search...."
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
          </Nav>

          {/* dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary   dropdown-toggle"
              type="button" id="dropdownMenuButton2"  data-bs-toggle="dropdown"  aria-expanded="false" ><i class="bi bi-person-circle text-dark fs-3 mb-3"></i></button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
