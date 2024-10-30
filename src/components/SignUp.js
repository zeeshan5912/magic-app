import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '../App.css';
import ImgSuper from '../Assets/Ai Super..png';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }

    if (password !== passwordConfirmation) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      name,
      surname,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    setIsLoading(true); // Start loading spinner

    try {
      const response = await axios.post(
        'https://magicai.keydevsdemo.com/api/auth/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setSuccess('Registration successful! Redirecting to login...');
      console.log('Response:', response.data);

      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="container-scroller rounded">
      <div className="container-fluid page-body-wrapper full-page-wrapper ">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 rounded">
                <div className="brand-logo">
                  <img src={ImgSuper} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps.
                </h6>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded"
                      id="exampleInputName1"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded"
                      id="exampleInputSurname1"
                      placeholder="Surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg rounded"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg rounded"
                      id="exampleInputPasswordConfirmation1"
                      placeholder="Confirm Password"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsAndConditions"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                      />
                      <label className="form-check-label text-muted" htmlFor="termsAndConditions">
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="spinner"></div> // Display spinner while loading
                      ) : (
                        'SIGN UP'
                      )}
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
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

export default SignUp;
