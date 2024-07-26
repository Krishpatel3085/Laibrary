import React from 'react';
import './nav.css';
import logo_main from '../images/main_logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="Navbar position-fixed w-100">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo_main} id='main_logo' alt="Main Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT US</Nav.Link>
            <NavDropdown title="PAGES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">TEAM</NavDropdown.Item>
              <NavDropdown.Item href="#action4">CONTACT</NavDropdown.Item>
              <NavDropdown.Item href="#action5">BLOG</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">EVENT</Nav.Link>
            <Nav.Link href="#">SHOP</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <Form.Control  type="search"  placeholder="Search...."  className="  me-2 rounded-pill"  aria-label="Search" />
          </Form>
          <Nav>
          <Nav.Link href="#addToCart" className='me-3'>
              <span className='shoping_icon'> <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </Nav.Link>
          </Nav>
          <Button variant="primary me-2 rounded-3">Login</Button>
          <Button variant="primary me-3 rounded-3">Registration</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
