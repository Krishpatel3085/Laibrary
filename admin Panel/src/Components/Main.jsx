import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import User from "../Pages/User";
import FormP from "../Pages/Form";
import Books from "../Pages/Books"

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="main">
            <div className="nav">

              <Navbar expand="lg" className=" mt-2 Navbar w-100  ">
                <Container fluid>
                  <Navbar.Brand href="#" className="icon"><i class="bi bi-toggles"></i></Navbar.Brand>

                  <Form className="d-flex ms-2 search" >
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll" className="icons_set">
                   
                      <Nav.Link href="#" className="icon"><i class="bi bi-grid-fill"></i></Nav.Link>
                      <Nav.Link href="#" className="icon"><i class="bi bi-envelope"></i></Nav.Link>
                      <Nav.Link href="#" className="icon"> <i class="bi bi-bell-fill"></i></Nav.Link>
                      <Nav.Link href="#" className="icon"> <i class="bi bi-person-circle"> hello</i> </Nav.Link>
                    

                  </Navbar.Collapse>
                </Container>
              </Navbar>

            </div>
            <div className="Routes">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<FormP />} />
                <Route path="/book" element={<Books />} />
                <Route path="/user" element={<User />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}