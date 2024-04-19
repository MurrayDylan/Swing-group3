// src/components/LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImage from '../assets/finch-logo.png';
import './login.css'; // Import the CSS file

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-button-container">
      <div>
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
      <div>
        <div className="login-text"></div>
        <button
          onClick={() => loginWithRedirect()}
          className="login-button"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
