// src/components/LogoutButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './logout.css'; // Import the CSS file

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
