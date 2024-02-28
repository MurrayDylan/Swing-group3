// components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css'; // Make sure this path is correct

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <nav className="navbar">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
        <button onClick={() => navigate('/AudienceCreation')}>Create Your Audience</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        {/* Adjust the logout functionality based on your Auth0 setup */}
      </nav>
    )
  );
};

export default Navbar;
