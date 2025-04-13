import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signup.css';
import signupImage from './assets/download.png';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(pattern.test(value));
    setEmail(value);
  };

  return (
    <div className="signup-container">
      <img src={signupImage} alt="Signup illustration" className="signup-img" />
      <div className="signup-card">
        <h1 className="signup-heading">Sign up</h1>

        <div>
          <div className="form-group">
            <div className="name-input-container">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className="normal-input"
              />
              {email && (
                <div className="icon-container">
                  {isValidEmail ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="normal-input"
            />
          </div>

          <button className="signup-button">Sign Up</button>

          <div className="login-text">
            Already have an account? <NavLink to="/login"><div>LogIn</div></NavLink>
          </div>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">or</div>
            <div className="divider-line"></div>
          </div>

          <button className="google-button">
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25..."></path>
              <path fill="#34A853" d="M12 23..."></path>
              <path fill="#FBBC05" d="M5.84 14.09..."></path>
              <path fill="#EA4335" d="M12 5.38..."></path>
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
