import React, { useState } from 'react';
//import "./signup.css"; // You'll need to create this file for styling
import { NavLink } from 'react-router-dom';
import signupImage from './assets/download.png';
//import Navbar2 from "./components/navbar_signup";


 function SignUpPage() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  
  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(pattern.test(value));
    setEmail(value);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    },
    formCard: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    heading: {
      fontSize: '24px',
      fontWeight: '500',
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '24px'
    },
    formGroup: {
      marginBottom: '16px'
    },
    nameInputContainer: {
      position: 'relative',
      borderRadius: '4px'
      
    },
    nameLabel: {
      position: 'absolute',
      top: '-8px',
      left: '8px',
      padding: '0 4px',
      fontSize: '12px',
      backgroundColor: 'white',
      color: '#3b82f6'
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '4px',
      outline: 'none',
      backgroundColor: 'white'
    },
    normalInput: {
      border: '1px solid #d1d5db',
      width: '100%',
      padding: '12px',
      borderRadius: '4px',
      outline: 'none',
      backgroundColor: 'white'
    },
    inputContainer: {
      position: 'relative'
    
    },
    iconContainer: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    signUpButton: {
      width: '100%',
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '12px 0',
      borderRadius: '4px',
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      marginBottom: '16px'
    },
    loginTextContainer: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px'
    },
    loginLink: {
      color: '#3b82f6',
      textDecoration: 'none'
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '24px 0'
    },
    dividerLine: {
      flexGrow: 1,
      height: '1px',
      backgroundColor: '#d1d5db'
    },
    dividerText: {
      padding: '0 12px',
      fontSize: '14px',
      color: '#6b7280'
    },
    googleButton: {
      width: '100%',
      border: '1px solid #d1d5db',
      color: '#374151',
      padding: '12px 0',
      borderRadius: '4px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    googleIcon: {
      marginRight: '8px',
      width: '20px',
      height: '20px'
    },
    img2: {
      // height: 'auto',
      borderRadius: '8px'
    }
  };

  return (
    <div style={styles.container}>
       <img src={signupImage} alt="Signup illustration" style={styles.img2} />
      {/* <NavLink to="/" className="cancel-cross" title="Go to Home">&times;</NavLink> */}
      <div style={styles.formCard}>
        <h1 style={styles.heading}>Sign up</h1>
        
        <div>
          {/* Name input */}
          <div style={styles.formGroup}>
            <div style={styles.nameInputContainer}>
              {/* <label style={styles.nameLabel}>Name</label> */}
              <input 
                type="text" 
                placeholder='Name'
                style={styles.input}
              />
            </div>
          </div>
          
          {/* Email input */}
          <div style={styles.formGroup}>
            <div style={styles.inputContainer}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                style={styles.normalInput}
              />
              {email && (
                <div style={styles.iconContainer}>
                  {isValidEmail ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        style={{color: '#10b981'}}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        style={{color: '#9ca3af'}}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Password input */}
          <div style={styles.formGroup}>
            <input 
              type="password" 
              placeholder="Password" 
              style={styles.normalInput}
            />
          </div>
          
          {/* Sign Up button */}
          <button style={styles.signUpButton}>
            Sign Up
          </button>
          
          {/* Login link */}
          <div style={styles.loginTextContainer}>
            Already have an account? <NavLink to={"/login"}><div>LogIn</div></NavLink>
          </div>
          
          {/* Divider */}
          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <div style={styles.dividerText}>or</div>
            <div style={styles.dividerLine}></div>
          </div>
          
          {/* Google sign up button */}
          <button style={styles.googleButton}>
            <svg style={styles.googleIcon} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;