import React, { useState } from "react";
import './first.css'; // Assuming this contains your styles
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import $ from "jquery"; // Import jQuery

export default function AdminNav() {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // State to manage the theme
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    $("#AdminNav").toggleClass("dark-them");
    $("aside").toggleClass("dark-them");
    $(".maina").toggleClass("maina-them");
    $("aside button span").toggleClass("aside-them2");
    $(".icons i").toggleClass("dark-them");
    $(".Boxs").toggleClass("dark-them");
    $(".line-chart").toggleClass("dark-them");
    $(".transection").toggleClass("dark-them");
    $(".transection tr").toggleClass("dark-them");
    $(".book-card").toggleClass("dark-them");
    $(".inputF").toggleClass("form-them");
    $(".BookForm").toggleClass("text-them");
    $("h2").toggleClass("text-them");
  };


  const gotoAdminlogin = () => {
    navigate('/adminlogin')
  }
  const gotologout = () => {
    Cookies.remove("Admin-username");
    Cookies.remove("Admin-userEmail");
    navigate("/");
  }
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}> {/* Toggle theme class */}
      <Navbar expand="lg" className="bg-body-tertiary position-fixed" id='AdminNav'>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex me-auto my-2 my-lg-0">
              <Form.Control
                type="search"
                placeholder="Search.."
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav className="icons">
              <Nav.Link href="#Dashboard" onClick={toggleTheme}>
                <i className="bi bi-moon"></i> {/* Toggle theme on click */}
              </Nav.Link>
              <Nav.Link href="#Form">
                <i className="bi bi-bell"></i>
              </Nav.Link>
             
              <NavDropdown
                title={
                  <span className="userData">
                    <i className="bi bi-person-circle fs-6 "></i>
                  </span>
                }
                id="profileDropdown2"
                alignRight
              >
                <NavDropdown.Item onClick={gotologout}>
                  <i className="fa-solid fa-right-to-bracket"></i> &nbsp; Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
