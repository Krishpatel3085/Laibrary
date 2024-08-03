import React from "react";
import Nav from "../component/NavBar/Nav";
import Footer from "../component/footer/Footer";
import Details from "../component/FullBook/Details";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
// import Registration from "../component/User/Registration";
import Main from "../Main/main.jsx";

export default function main() {
  return (
    <>
      <Nav />
      <div className="Routes" style={{paddingTop:"9vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resume" element={} />
          <Route path="/portfolio" element={} />
          <Route path="/contact" element={} /> */}
          <Route path="/details/:_id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
