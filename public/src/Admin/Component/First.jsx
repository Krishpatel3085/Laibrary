import React from "react";
import { useState } from "react";
import logo from "../img/logo2.png";
import Dashboard from "../Pages/Dashboard";
import BookForm from "../Pages/BookForm";
import Book from "../Pages/Book";
import User from "../Pages/User";
import $ from "jquery"; // Import jQuery
import "./first.css";
import AdminNav from "./AdminNav";

function First() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    $("#sidebar").toggleClass("sidebar-closed");
    $(".maina").toggleClass("maina-big");
    $("#AdminNav ").toggleClass("AdminNav-toggle");
    $(".book-card").toggleClass("book-card-toggle");
    $(".Boxs").toggleClass("boxs-toggle");
    $(".transection").toggleClass("transection-toggle");
  };

  return (
    <>
      <div class="d-flex align-items-start">
        <aside
          id="sidebar"
          className={`p-3  ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <div className="title">
            <h4 className="d-flex justify-content-between">
              {isSidebarOpen && <span>ADMINS</span>}
              <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                <i className={`bi bi-${isSidebarOpen ? "list" : "list"}`}></i>
              </span>
            </h4>
          </div>
          {isSidebarOpen && (
            <div className="profile mt-4">
              <img src={logo} alt="User" className="img-fluid" />
              <h3 className="mt-3" style={{ color: "#4cceac" }}>
                LMS
              </h3>
            </div>
          )}
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <span>
                <i className="bi bi-house-door"></i>
                {isSidebarOpen && "DashBoard"}
              </span>
            </button>
            {isSidebarOpen && <p>Pages</p>}
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <span>
                <i className="bi bi-table"></i>
                {isSidebarOpen && "Form"}
              </span>
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <span>
                <i className="bi bi-book"></i>
                {isSidebarOpen && "Books"}
              </span>
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <span>
                <i className="bi bi-person-circle"></i>
                {isSidebarOpen && "User"}
              </span>
            </button>
            {isSidebarOpen && <p>Data</p>}
          </div>
        </aside>
        <div class="tab-content maina" id="v-pills-tabContent">

          <AdminNav/>
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <Dashboard />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <BookForm />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <Book />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <User />
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
