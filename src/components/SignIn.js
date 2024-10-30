import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '../App.css';
import ImgSuper from '../Assets/Ai Super..png';

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        'https://magicai.keydevsdemo.com/api/auth/login',
        loginData, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Extract token from response
      const token = response.data.token;

      setSuccess('Login successful!');
      console.log('Response:', response.data);

      // Pass the token to the onLogin callback
      onLogin(token);

      // Navigate to the dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 rounded">
                <div className="brand-logo">
                  <img src={ImgSuper} alt="logo" />
                </div>
                <h4>Hello! Let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg rounded"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="spinner"></div>
                      ) : (
                        'SIGN ME IN'
                      )}
                    </button>
                  </div>
                  {/* <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="/#" className="auth-link text-black">
                      Forgot password?
                    </a>
                  </div> */}
                  <div className="my-2 d-flex justify-content-between align-items-center">
  <div className="form-check">
    <label className="form-check-label text-muted">
      <input type="checkbox" className="form-check-input" />
      Keep me signed in
    </label>
  </div>
  <Link to="/forget-password" className="auth-link text-black">
    Forgot password?
  </Link>
</div>

                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
