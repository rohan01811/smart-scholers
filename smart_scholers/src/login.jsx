import React, { useState } from 'react';
import "./login.css"

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Here you would typically make an API call to authenticate
    console.log('Logging in with:', { username, password });
    alert('Login attempted! Check console for details.');
    
    // Reset form after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <div className="form-group remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          
          <div className="additional-options">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#create-account">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;






