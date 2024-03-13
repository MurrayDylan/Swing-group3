import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Home from './components/Home';
import Profile from './components/profile';
import EditProfile from './components/EditProfile';
import CreationPage from './components/AudienceCreation';
import Campaign from './components/Campaign';
import Navbar from './components/NavBar';
import CampaignCreation from './components/CampaignCreation';
import { ProfileProvider } from './components/ProfileContext'; 
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <ProfileProvider> 
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={!isAuthenticated ? <LoginButton /> : <Navigate to="/" replace />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
            <Route path="/logout" element={isAuthenticated ? <LogoutButton /> : <Navigate to="/login" replace />} />
            <Route path="/AudienceCreation" element={isAuthenticated ? <CreationPage /> : <Navigate to="/login" replace />} />
            <Route path="/Campaign" element={isAuthenticated ? <Campaign /> : <Navigate to="/login" replace />} />
            <Route path="/campaign-creation" element={isAuthenticated ? <CampaignCreation /> : <Navigate to="/login" replace />} />
            <Route path="/edit-profile" element={isAuthenticated ? <EditProfile /> : <Navigate to="/login" replace />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </ProfileProvider>
    </Router>
  );
}

export default App;
