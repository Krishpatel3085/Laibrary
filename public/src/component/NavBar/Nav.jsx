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


  const gotoLoginpage = () => {
    navigate("/");
  };
  const gotoHomepage = () => {
    navigate("/home");
  };
  const gotoAbout = () => {
    navigate("/about");
  };

  const gotoPage = () => {
    navigate("/page");
  };

  const gotoEvent = () => {
    navigate("/event");
  };
  const gotoContact=()=>{
    navigate("/contact");
  }

  const gotoShop = () => {
    navigate("/shop");
  };

  const gotocart = () => {
    navigate("/checkout");
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

              onClick={() => gotoHomepage()}
            >
              HOME
            </Nav.Link>
            <Nav.Link

              onClick={() => gotoAbout()}
            >
              ABOUT US
            </Nav.Link>
            <NavDropdown
              title="PAGES"
              id="navbarScrollingDropdown"

            >
              <NavDropdown.Item
                onClick={() => gotoPage()}
              >
                TEAM
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>gotoContact()}
              >
                CONTACT
              </NavDropdown.Item>
              <NavDropdown.Item


              >
                BLOG
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => gotoEvent()}
            >
              EVENT
            </Nav.Link>
            <Nav.Link
              onClick={() => gotoShop()}
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
            <Nav.Link href="#addToCart" className="me-3" onClick={()=>gotocart()}>
              <span className="shopping_icon">
                <i className="fa-solid fa-bag-shopping"></i>
              </span>
            </Nav.Link>
          </Nav>
          <Button variant="primary me-2 rounded-3" onClick={() => gotoLoginpage()}>Login</Button>
          <Button variant="primary me-3 rounded-3">Registration</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
