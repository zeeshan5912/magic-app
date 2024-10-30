import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming you have the CSS for styling
import ImgSuper from '../Assets/Ai Super..png';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        // 'https://magicai.keydevsdemo.com/api/auth/forget-password',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      setSuccess('Password reset link sent! Please check your email.');
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset link. Please try again.');
      setSuccess('');
    } finally {
      setIsLoading(false);
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
                <h4>Forgot Your Password?</h4>
                <h6 className="font-weight-light">Enter your email to reset your password</h6>
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
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? <div className="spinner"></div> : 'Reset Password'}
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Remember your password? <Link to="/signin" className="text-primary">Sign In</Link>
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

export default ForgetPassword;
