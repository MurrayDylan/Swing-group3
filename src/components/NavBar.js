// components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logoImage from '../assets/finchlogo2.png'; 
import './navbar.css'; // 确保路径正确

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    
    isAuthenticated && (
      <nav className="navbar">
        <img src={logoImage} alt="Finch Mini Trade Desk Logo" className="navbar-logo" onClick={() => navigate('/')} />
        <div className="navbar-links">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/AudienceCreation')}>Create Your Audience</button>
          <button onClick={() => navigate('/Campaign')}>Campaign</button>
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
