import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import User from "../Pages/User";
import FormP from "../Pages/Form";
import Books from "../Pages/Books"
export default function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="main">
            <div className="col-md-10">
              <nav className="d-flex gap-4">
                <div className="button">
                  <div className="icon">
                    <i class="bi bi-list"></i>
                  </div>
                </div>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                />
                <div className="nav_message">
                  <i class="bi bi-grid"></i>
                  <i class="bi bi-envelope"></i>
                  <i class="bi bi-bell-fill"></i>
                </div>

                <div className="nav_dropdown pe-2">
                    <img src="" alt="avtar" />
                    <span>hello</span>
                </div>
              </nav>
            </div>

            <div className="Routes">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<FormP />} />
                <Route path="/book" element={<Books/>} />
                <Route path="/user" element={<User />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}