import React from 'react'
import './user.css'
import main_img from '../images/main_login.jpg'
import logo from '../images/web logo1.png'

function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }} id="Card-id">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={main_img}
                    alt="login form"
                    className="img-fluid h-100  "
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3"  style={{ color: "#ff6219" }} />
                        <span className="logo-width"><img src={logo} /></span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3"  style={{ letterSpacing: 1 }}  > Sign into your account  </h5>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder='Enter your Email'
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input  type="password"  id="form2Example27"  className="form-control form-control-lg" placeholder='Enter Your Password'/>
                      </div>
                      <div className="pt-1 mb-4">
                        <button data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-lg btn-block" type="button">Login</button>
                      </div>
                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}> Don't have an account?{" "}<a href="#!" style={{ color: "#393f81" }}>Register here</a></p>
                      <a href="#!" className="small text-muted">Terms of use. </a>
                      <a href="#!" className="small text-muted">Privacy policy </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login