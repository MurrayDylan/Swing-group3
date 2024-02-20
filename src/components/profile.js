import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate(); // Hook for navigation

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => navigate('/')}> {/* Use navigate to go back to home */}
          back
        </button>
      </div>
    )
  );
};

export default Profile;
