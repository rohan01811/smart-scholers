import React, { useState } from 'react';
import { useNavigate, NavLink, } from 'react-router-dom';
import './signup.css';
import signupImage from './assets/download.png';


function SignUpPage() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();


  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(pattern.test(value));
    setEmail(value);
  };

  const submitinfo =async () => {
    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }
    if (name === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Handle signup logic here
   
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        // Redirect or clear form if needed
        setName('');
        setEmail('');
        setPassword('');
       
      } else {
        alert(data.message || 'Signup failed.');
      }

      navigate('/'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong. Try again.');
    }
  };

  

  return (
    <div className="signup-container5">
      <img src={signupImage} alt="Signup illustration" className="signup-img5" />
      <div className="signup-card5">
        <h1 className="signup-heading5">Sign up</h1>

        <div>
          <div className="form-group5">
            <div className="name-input-container5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="form-group5">
            <div className="input-container5">
              <input
                type="email"
                name='email'
                placeholder="Email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className="normal-input5"
              />
              {email && (
                <div className="icon-container5">
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

          <div className="form-group5">
            <input
              type="password"
              name='password'
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="normal-input5"
            />
          </div>

          <button className="signup-button5" onClick={submitinfo}>Sign Up</button>

          <div className="login-text5">
            Already have an account? <NavLink to="/login"><div>LogIn</div></NavLink>
          </div>

          <div className="divider5">
            <div className="divider-line5"></div>
            <div className="divider-text5">or</div>
            <div className="divider-line5"></div>
          </div>

          <button className="google-button5">
            <svg className="google-icon5" viewBox="0 0 24 24">
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
