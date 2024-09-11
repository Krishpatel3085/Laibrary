import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

export default function Main() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/home");
  };

  const gotoAdmin = () => {
    navigate("/adminRegistration");
  };
  return (
    <>
      <div className="section main">
        <div className="container m-auto">
          <div className="row m-auto">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="one" onClick={gotohome}>
                <h2>
                  <i className="bi bi-people"></i> {""}
                  User
                </h2>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="one" onClick={gotoAdmin}>
                <h2>
                  <i className="bi bi-person-plus-fill"></i> Admin
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
