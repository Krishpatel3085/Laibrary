import axios from 'axios';
import main_img from '../img/registration.jpeg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminRegistration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  
    const CreateAdmin = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('username', username);
  
      try {
        await axios.post("https://ldfs6814-8085.inc1.devtunnels.ms/admin/register", formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        setEmail('');
        setPassword('');
        setUsername('');
  
        alert("Ragistration Success")
        navigate("/adminlogin")
      } catch (error) {
        console.error("Error:", error);
        alert("user alrady exist")
  
      }
    }
  


  return (
   
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
                  Admin  Registration form
                  </h3>
                  <form onSubmit={CreateAdmin}>
                    <div className="row">
                     
                      <div className="col-md-12">
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          <label className="form-label" htmlFor="inputPassword3">
                            UserName
                          </label>
                          <input
                            type="text"
                            id="form3Example97"
                            className="form-control form-control-lg"
                            placeholder='Enter User Name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
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
                      <button
                        type="submit"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-primary btn-lg ms-2"
                      >
                        Submit form
                      </button>

                      <h6 className='pt-3 text-center'>Already have an account? <a href="/adminlogin">Sing in</a></h6>

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




  );
};

export default AdminRegistration;
