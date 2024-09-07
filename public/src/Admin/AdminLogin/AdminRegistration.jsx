import axios from 'axios';
import main_img from '../img/registration.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false); // New flag for OTP verification
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const CreateAdmin = async (e) => {
    e.preventDefault();

    // Check if OTP is verified before allowing registration
    if (!isOtpVerified) {
      setMessage('Please verify your OTP before registering.');
      return;
    }

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
      setOtp('');
      setIsOtpSent(false);
      setIsOtpVerified(false); // Reset OTP verification

      alert("Registration Success");
      navigate("/adminlogin");
    } catch (error) {
      console.error("Error:", error);
      alert("User already exists");
    }
  };

  const sendOtp = async () => {
    try {
      await axios.post('https://ldfs6814-8085.inc1.devtunnels.ms/send-otp', { email });
      setIsOtpSent(true);
      setMessage('OTP sent to your email');
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('https://ldfs6814-8085.inc1.devtunnels.ms/verify-otp', { email, otp: otp.toString() });
      setIsOtpVerified(true);  // Set flag to true upon successful verification
      setMessage(response.data.msg);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setIsOtpVerified(false);  // Reset flag if OTP verification fails
      setMessage(error.response.data.msg || 'Error verifying OTP');
    }
  };

  return (
    <section className="h-100">
      <div className="container py-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
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
                      Admin Registration Form
                    </h3>
                    <form onSubmit={CreateAdmin}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputUsername">UserName</label>
                            <input
                              type="text"
                              id="inputUsername"
                              className="form-control form-control-lg"
                              placeholder="Enter User Name"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputEmail">Email ID</label>
                            <div className="otp d-flex gap-2">
                              <input
                                type="email"
                                id="inputEmail"
                                className="form-control form-control-lg"
                                placeholder="abc@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <button type="button" className="w-25" onClick={sendOtp}>Send OTP</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputOtp">OTP</label>
                            <div className="otp2 d-flex gap-2">
                              <input
                                type="number"
                                id="inputOtp"
                                className="form-control form-control-lg"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                              <button type="button" onClick={verifyOtp}>Verify OTP</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputPassword">Password</label>
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control form-control-lg"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="inputConfirmPassword">Confirm Password</label>
                            <input
                              type="password"
                              id="inputConfirmPassword"
                              className="form-control form-control-lg"
                              placeholder="Enter Confirm Password"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          data-mdb-button-init=""
                          className="btn btn-primary btn-lg ms-2"
                          disabled={!isOtpVerified} // Disable button until OTP is verified
                        >
                          Submit form
                        </button>

                        <h6 className="pt-3 text-center ">
                          Already have an account? <a href="/adminlogin">Sign in</a>
                        </h6>
                      </div>
                    </form>
                    <br />
                    <h5 className="text-center text-primary ">
                      <span className='d-flex justify-content-center'>
                        💁‍♂️👉 {message && <p>{message}</p>}👈👩‍💻
                      </span>
                    </h5>
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
