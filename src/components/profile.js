import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Ensure the CSS file is correctly imported

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container"> {/* Use the new class for styling */}
        <img src={user.picture} alt={user.name} className="profile-image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => navigate('/')} className="back-button">
          Back
        </button>
      </div>
    )
  );
};

export default Profile;
