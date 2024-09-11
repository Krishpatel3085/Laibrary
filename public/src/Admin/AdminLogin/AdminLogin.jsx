// src/AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { APi_URL } from "../../Utils/apiConfig";
import "./adminLogin.css";

import main_img from "../img/IG_ziGVl8gI2PKZ.png";
import logo_main from "../img/main_logo.jpg";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const gotoRagister = () => {
    navigate('/adminRegistration')
  }

  const LoginAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(APi_URL + 'admin/login', {
        email,
        userName,
        password,
      });
      if (response.data) {
        Cookies.set('userEmail', email, { expires: 7 });
        Cookies.set('username', userName, { expires: 7 });
        alert('Login successfully 👍');
        navigate('/first');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'User Not Found or Invalid Credentials 👎');
      console.error("Login error:", error.response?.data);
      navigate('/')
    }
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }} id="Card-id">
              <div className="row g-0">
                <div className="col-md-6  col-lg-5 d-none d-md-block">
                  <img
                    src={main_img}
                    alt="login form"
                    className="img-fluid h-100 m-0"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 ">
                  <div className="card-body p-lg-5 text-black">
                    <form onSubmit={LoginAdmin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src={logo_main}
                          alt="img"
                          style={{ width: "100px", height: "120px" }}
                        />
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17" >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          UserName
                        </label>
                        <input
                          type="username"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="Enter your Username" value={userName} onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a
                          href='#'
                          onClick={gotoRagister}
                          style={{ color: "#393f81" }}
                        >
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
