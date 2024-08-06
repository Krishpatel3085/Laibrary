import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from "react-router-dom";

import Dashboard from '../Pages/Dashboard';
import './main.css'
import Book from '../Pages/Book';
import User from '../Pages/User';
import BookForm from '../Pages/BookForm';
export default function Main() {
  return (
    <>
      <div className="main">

        <div className='topbar'>
          <Navbar expand="lg" className="bg-body-tertiary ">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto my-2 my-lg-0" >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                  />
                </Form>
                <Nav className='icons'>
                  <Nav.Link href="#action1"><i class="bi bi-moon"></i></Nav.Link>
                  <Nav.Link href="#action2"><i class="bi bi-bell"></i></Nav.Link>
                  <Nav.Link href="#action3"> <i class="bi bi-gear"></i> </Nav.Link>
                  <Nav.Link href="#action3"> <i class="bi bi-person"></i> </Nav.Link>
                </Nav>


              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/form" element={<BookForm />} />
            <Route path="/book" element={<Book />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
