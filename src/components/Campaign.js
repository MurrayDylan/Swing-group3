import React from 'react';
import './Campaign.css';
import { useNavigate } from 'react-router-dom';
//import Header from './CampaignHeader.js';

function Campaign() {
  const navigate = useNavigate();
  
  const goToCampaignCreation = () => {
    navigate('/campaign-creation'); // This should match the route you set for the CampaignCreation component
  };

  return (
    <div className="app">
      {/* <Header />*/}
      <div className="content">
        {/* Button with explicit style for testing */}
        <button onClick={goToCampaignCreation} style={{ fontSize: '20px', padding: '10px', margin: '20px', display: 'block' }}>
          Create Campaign
        </button>
        {/*<Sidebar />*/}
        {/*<CampaignTable />*/}
      </div>
    </div>
  );
}

export default Campaign;
