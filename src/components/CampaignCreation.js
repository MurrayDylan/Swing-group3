// CampaignCreation.js
import React, { useState, useContext } from 'react';
import { CampaignContext } from './CampaignContext';
import { useNavigate } from 'react-router-dom';
import './CreationPage.css';

const SideBarItem = ({ title, onClick }) => (
  <li className="sidebar-item" onClick={onClick}>
    {title}
  </li>
);

const SideBar = ({ onSelect, onRefresh }) => {
  const navigate = useNavigate();

  // Function to navigate to the campaign creation page
  const goToCampaignCreation = () => {
    navigate('/campaign-creation');
  };

  const navigateToContactUs = () => {
    navigate('/new-page');
  };

  // Function to navigate to the delete campaign page
  const goToDeleteCampaign = () => {
    navigate('/manage');
  };

  return (
    <nav className="sidebar">
      <ul>
        {/* List of items in the sidebar */}
        <SideBarItem title="Insights" onClick={() => navigate('/Campaign')} />
        <SideBarItem title="Tracking & Audiences" onClick={() => onSelect('Tracking & Audiences')} />
        <SideBarItem title="Academy & Support" onClick={() => navigateToContactUs()} />
        <SideBarItem title="Create Campaign" onClick={goToCampaignCreation} />
        {/* New sidebar item for delete campaign page */}
        <SideBarItem title="Campaign Management" onClick={goToDeleteCampaign} />
        {/* Refresh Data item which triggers resetData function */}
        <SideBarItem title="Refresh Data" onClick={onRefresh} />
      </ul>
    </nav>
  );
};

const CampaignCreation = () => {
  const handleSelectSidebarItem = (itemName) => {
    console.log(`${itemName} selected`);
    // Potential updates based on item selection
  };

  const handleButtonClick = () => {
    window.location.href = 'https://www.thetradedesk.com/us/contact-us';
  };

  const navigate = useNavigate();
  const { addCampaign } = useContext(CampaignContext);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    budget: '',
    spend: '',
    primaryKPI: '',
    baseBid: '',
    maxBid: '',
    cpm: '',
    frequency: '',
  });

  const handleSave = () => {
    addCampaign(newCampaign);
    console.log('Campaign saved:', newCampaign);
    navigate('/campaign');
  };

  // Function to handle numeric input changes
  const handleNumericChange = (key) => (value) => {
    setNewCampaign({ ...newCampaign, [key]: value });
  };


  return (
    <div className="layout-container">
      <aside className="sidebar-container">
        {/* Sidebar with selection and refresh handlers */}
        <SideBar onSelect={handleSelectSidebarItem} />
      </aside>
      {/* Content container */}
      <div className="content-container">
        {/* Header container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Fixed header section */}
          <h1 className="white-text" style={{ alignSelf: 'center' }}>
            Create Your Campaign
          </h1>
        </div>

        {/* Scrollable content section */}
        <div style={{ overflowY: 'auto', flex: 0 }}>
          <div className="white-text" style={{ padding: '0 20px' }}>
            {/* Campaign Name input */}
            <p>Campaign Name</p>
            <input value={newCampaign.name} onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })} />

            {/* Budget Input */}
            <p>Budget</p>
            <input
              value={newCampaign.budget}
              onChange={(e) => setNewCampaign({ ...newCampaign, budget: e.target.value })}
            />

            {/* Spend Input */}
            <p>3. Spend</p>
            <input
              value={newCampaign.spend}
              onChange={(e) => setNewCampaign({ ...newCampaign, spend: e.target.value })}
            />

            {/* Primary KPI Input */}
            <p>4. Primary KPI (%)</p>
            <input
              value={newCampaign.primaryKPI}
              onChange={(e) => setNewCampaign({ ...newCampaign, primaryKPI: e.target.value })}
            />

            {/* Base Bid Input */}
            <p>5. Base Bid ($)</p>
            <input
              value={newCampaign.baseBid}
              onChange={(e) => setNewCampaign({ ...newCampaign, baseBid: e.target.value })}
            />

            {/* Max Bid Input */}
            <p>6. Max Bid ($)</p>
            <input
              value={newCampaign.maxBid}
              onChange={(e) => setNewCampaign({ ...newCampaign, maxBid: e.target.value })}
            />

            {/* CPM Input */}
            <p>7. CPM ($)</p>
            <input value={newCampaign.cpm} onChange={(e) => setNewCampaign({ ...newCampaign, cpm: e.target.value })} />

            {/* Frequency Input */}
            <p>8. Frequency (If unknown put N/A)</p>
            <input value={newCampaign.frequency} onChange={(e) => setNewCampaign({ ...newCampaign, frequency: e.target.value })} />
          </div>
        </div>

        {/* Fixed footer section */}
        <button onClick={handleSave} style={{ padding: '10px 20px', margin: '20px 120px' }}>
          Submit Campaign
        </button>
      </div>
    </div>
  );
};

export default CampaignCreation;
