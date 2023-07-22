import React, { useState } from 'react';
import './App.css';
import successIcon from './images/icon-list.svg';
import desktopIllustration from "./images/illustration-sign-up-desktop.svg";
import successPageIcon from "./images/icon-success.svg";

// Function to validate the email
const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

// Main component
export default function App() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      setEmailError('Please enter an email address.');
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
      setSuccess(true);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  }

  const inputClass = emailError ? 'error' : '';

  // Success page content
  if (success) {
    return (
      <section className="success-container">
        <img src={successPageIcon} alt="success icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to 
          <span className="email-highlight"> {email}</span>. 
          Please open it and click the button inside to confirm your subscription.
        </p>
        <button>Dismiss message</button>
      </section>
    )
  }

  // Newsletter sign up page content
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h1>Stay updated!</h1>
        <p className="cta-text">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={successIcon} alt="success icon" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={successIcon} alt="success icon" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={successIcon} alt="success icon" />
            <p>And much more!</p>
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="input-border">
            <p>Email address</p>
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <input type="email" placeholder="email@company.com" value={email} onChange={handleEmailChange} className={inputClass} />
          <button type="submit" onClick={handleSubmit}>Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="newsletter-image">
        <img src={desktopIllustration} alt="newsletter illustration" />
      </div>
    </section>
  );
}
