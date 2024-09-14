import axios from 'axios';
import main_img from '../img/registration.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APi_URL } from '../../Utils/apiConfig';
const AdminRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const CreateAdmin = async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      setMessage('Please verify your OTP before registering.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    const formData = { email, password, username };

    try {
      setLoading(true);
      const response = await axios.post(APi_URL + "admin/register", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Reset form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
      setOtp('');
      setIsOtpSent(false);
      setIsOtpVerified(false);

      alert("Registration Successful.& A confirmation email has been sent.");
      console.log(isOtpSent);
      
      navigate("/adminlogin");
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.msg || "User already exists or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async () => {
    try {
      setLoading(true);
      await axios.post(APi_URL + 'send-otp', { email });
      setIsOtpSent(true);
      setMessage('OTP sent to your email');
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage('Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(APi_URL + 'verify-otp', { email, otp: otp.toString() });
      setIsOtpVerified(true);
      setMessage(response.data.msg);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setIsOtpVerified(false);
      setMessage(error.response?.data?.msg || 'Error verifying OTP');
    } finally {
      setLoading(false);
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
                              <button type="button" className="w-25" onClick={sendOtp} disabled={loading}>
                                {loading ? 'Sending...' : 'Send OTP'}
                              </button>
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
                              <button type="button" onClick={verifyOtp} disabled={loading}>
                                {loading ? 'Verifying...' : 'Verify OTP'}
                              </button>
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
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg ms-2"
                          disabled={!isOtpVerified || loading}
                        >
                          {loading ? 'Submitting...' : 'Submit form'}
                        </button>

                        <h6 className="pt-3 text-center">
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
