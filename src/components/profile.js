import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate('/edit-profile'); // 导航至 EditProfile 组件
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
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Career: {user.career}</p>
          <p>Gender: {user.gender}</p>
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
