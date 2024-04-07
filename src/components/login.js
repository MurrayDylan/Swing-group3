import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import loginImage from '../assets/finch-logo.png'; // Import your image here

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      <div style={{ marginBottom: '20px' }}> {/* Adjust marginBottom as needed */}
        <img src={loginImage} alt="Login" style={{ width: '500px', height: 'auto' }} />
      </div>
      <div>
        <div style={{ textAlign: 'center', padding: '50px' }}></div>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            padding: '15px 40px',
            fontSize: '20px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
