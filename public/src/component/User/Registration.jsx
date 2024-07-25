import React from 'react'
import './user.css'
import main_img from '../images/main_login.jpg'

function Registration() {
  return (
    <>
      <section className="h-100">
        <div className="container py-2 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={ main_img}
                      alt="Sample photo"
                      className="img-fluid w-100"
                      id='card-img'
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem"
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                       Registration form
                      </h3>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <label className="form-label" htmlFor="form3Example1m">
                              First name
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              placeholder='Enetr Your First name'
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <label className="form-label" htmlFor="form3Example1m">
                              Last name
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              placeholder='Enetr Your Last Name'
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div data-mdb-input-init="" className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example97">
                              Email ID
                            </label>
                            <input
                              type="email"
                              id="form3Example97"
                              className="form-control form-control-lg"
                              placeholder='abc@gmail.com'
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div data-mdb-input-init="" className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example97">
                             Password
                            </label>
                            <input
                              type="password"
                              id="inputPassword3"
                              className="form-control form-control-lg"
                              placeholder='Enter Password'
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div data-mdb-input-init="" className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputPassword3">
                            Conform Password
                            </label>
                            <input
                              type="password"
                              id="form3Example97"
                              className="form-control form-control-lg"
                              placeholder='Enter Conform Password'
                            />
                          </div>
                        </div>
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              defaultValue="option1"
                            />
                            <label className="form-check-label" htmlFor="femaleGender">
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="maleGender">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              defaultValue="option3"
                            />
                            <label className="form-check-label" htmlFor="otherGender">
                              Other
                            </label>
                          </div>
                        </div>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration