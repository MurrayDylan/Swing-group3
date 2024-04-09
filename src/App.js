import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Home from './components/Home';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreationPage from './components/AudienceCreation';
import NewPage from './components/NewPage';
import Campaign from './components/Campaign';
import Navbar from './components/NavBar';
import NewPage from './components/NewPage';
import DeleteCampaign from './components/DeleteCampaign';

import CampaignCreation from './components/CampaignCreation';
import { ProfileProvider } from './components/ProfileContext';
import { CampaignProvider } from './components/CampaignContext';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <CampaignProvider>
      <ProfileProvider> 
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={!isAuthenticated ? <LoginButton /> : <Navigate to="/" replace />} />
            <Route path="/Profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
            <Route path="/logout" element={isAuthenticated ? <LogoutButton /> : <Navigate to="/login" replace />} />
            <Route path="/AudienceCreation" element={isAuthenticated ? <CreationPage /> : <Navigate to="/login" replace />} />
            <Route path="/Campaign" element={isAuthenticated ? <Campaign /> : <Navigate to="/login" replace />} />
            <Route path="/campaign-creation" element={isAuthenticated ? <CampaignCreation /> : <Navigate to="/login" replace />} />
            <Route path="/edit-profile" element={isAuthenticated ? <EditProfile /> : <Navigate to="/login" replace />} />
            <Route path="/delete-campaign" exact component={DeleteCampaign} /> 
            <Route path="/new-page" element={isAuthenticated ? <NewPage /> : <Navigate to="/login" replace />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </ProfileProvider>
      </CampaignProvider>
    </Router>
  );
}

export default App;
