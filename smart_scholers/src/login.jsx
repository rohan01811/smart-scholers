import React, { useState } from 'react';
import "./login.css";
import Navbar1 from "./components/navbar_login";
import { NavLink, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './login';
// import App from './App';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setError('');

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Invalid credentials');
        return;
      }

      alert('Login successful!');
      console.log('Logged in:', data);

      // Navigate to home/dashboard page
      navigate('/'); // You can change this to your actual route

    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container3">
      <img
        src="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=1200"
        alt=""
        className="img13"
      />

      <div className="login-form-wrapper3">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form3">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="checkbox3">
            <input type="checkbox" id="remember-c" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-button3">
            Login
          </button>

          <div className="additional-options3">
            <a href="#forgot-password">Forgot Password?</a>
            <NavLink to="/signup"><div>SignUp</div></NavLink>
          </div>
        </form>
      </div>
    </div>

    
  );
}

export default LoginPage;
