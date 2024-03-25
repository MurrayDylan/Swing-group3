import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './profile.css';
import { useProfile } from "./ProfileContext"; 

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const { profile } = useProfile(); 

  const goToEditProfile = () => {
    navigate('/edit-profile'); 
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="profile-avatar-wrapper">
          <img src={user.picture} alt={user.name} className="profile-avatar" />
        </div>
        <div className="profile-info">
          <h2>{profile.name || user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Date Of Birth: {profile.dateOfBirth}</p> 
          <p>Career: {profile.career}</p>
          <p>Gender: {profile.gender}</p>
          <p>Address: {profile.address}</p> 
        </div>
        <button onClick={goToEditProfile} className="edit-button">
          Edit Profile
        </button>
        <button onClick={() => navigate('/')} className="back-button">
          Back
        </button>
      </div>
    )
  );
};

export default Profile;
