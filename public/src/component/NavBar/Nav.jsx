import React, { useState } from "react";
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
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("#action1");

  // const handleNavLinkClick = (href) => {
  //   setActiveLink(href);
  // };

  
    const gotoLoginpage = (href) => {
      navigate("/");
      setActiveLink(href);
    };
  const gotoHomepage = (href) => {
    navigate("/home");
    setActiveLink(href);
  };
  const gotoAbout = (href) => {
    navigate("/about");
    setActiveLink(href);
  };
  
  const gotoPage = (href) => {
    navigate("/page");
    setActiveLink(href);
  };
  
  const gotoEvent = (href) => {
    navigate("/event");
    setActiveLink(href);
  };
  
  const gotoShop = (href) => {
    navigate("/shop");
    setActiveLink(href);
  };

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
              href="#action1"
              className={`navbar__link text-black ${
                activeLink === "#action1" ? "active" : ""
              }`}
              onClick={() => gotoHomepage("#action1")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`navbar__link text-black ${
                activeLink === "#action2" ? "active" : ""
              }`}
              onClick={() => gotoAbout("#action2")}
            >
              ABOUT US
            </Nav.Link>
            <NavDropdown
              title="PAGES"
              id="navbarScrollingDropdown"
              className={`navbar__link text-black ${
                activeLink.startsWith("#action3") ||
                activeLink.startsWith("#action4") ||
                activeLink.startsWith("#action5")
                  ? "active"
                  : ""
              }`}
            >
              <NavDropdown.Item
                href="#action3"
                className={`navbar__dropdown-link text-black ${
                  activeLink === "#action3" ? "active" : ""
                }`}
                onClick={() => gotoPage("#action3")}
              >
                TEAM
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className={`navbar__dropdown-link ${
                  activeLink === "#action4" ? "active" : ""
                }`}
                
              >
                CONTACT
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={`navbar__dropdown-link ${
                  activeLink === "#action5" ? "active" : ""
                }`}
          
              >
                BLOG
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#event"
              className={`navbar__link ${
                activeLink === "#event" ? "active" : ""
              }`}
              onClick={() => gotoEvent("#event")}
            >
              EVENT
            </Nav.Link>
            <Nav.Link
              href="#shop"
              className={`navbar__link ${
                activeLink === "#shop" ? "active" : ""
              }`}
              onClick={() => gotoShop("#shop")}
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
            <Nav.Link href="#addToCart" className="me-3">
              <span className="shopping_icon">
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
            </Nav.Link>
          </Nav>
          <Button variant="primary me-2 rounded-3" onClick={()=>gotoLoginpage()}>Login</Button>
          <Button variant="primary me-3 rounded-3">Registration</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
