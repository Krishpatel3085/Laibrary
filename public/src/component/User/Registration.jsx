import React, { useState } from 'react';
import './user.css';
import main_img from '../images/main_login.jpg';
import axios from 'axios';

function Registration() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const CreateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gender', gender);

    try {
      await axios.post("https://ldfs6814-8085.inc1.devtunnels.ms/user/register ", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setGender('');

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <section className="h-100">
        <div className="container py-2 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0 ">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img 
                      src={main_img}
                      alt="Sample"
                      className="img-fluid w-100 m-0"
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
                      <form onSubmit={CreateUser}>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              <label className="form-label" htmlFor="form3Example1m">
                                First name
                              </label>
                              <input
                                type="text"
                                id="form3Example1m"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="form-control form-control-lg"
                                placeholder='Enter Your First name'
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
                                placeholder='Enter Your Last Name'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div data-mdb-input-init="" className="form-outline mb-4">
                              <label className="form-label" htmlFor="inputPassword3">
                                Confirm Password
                              </label>
                              <input
                                type="password"
                                id="form3Example97"
                                className="form-control form-control-lg"
                                placeholder='Enter Confirm Password'
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
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
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
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={(e) => setGender(e.target.value)}
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
                                value="Other"
                                checked={gender === 'Other'}
                                onChange={(e) => setGender(e.target.value)}
                              />
                              <label className="form-check-label" htmlFor="otherGender">
                                Other
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>

                          <h6 className='pt-3 text-center'>Already have an account? <a href="/">Sing in</a></h6>

                        </div>
                      </form>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
