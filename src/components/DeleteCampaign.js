import { useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './DeleteCampaign.css';
import React, { useContext } from 'react';
import { CampaignContext } from './CampaignContext';

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
      {/* Fully aware that this should be a component but last minute patch D.M */}
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


const DeleteCampaign = () => {
  const { campaigns, deleteCampaign } = useContext(CampaignContext);

  const handleDelete = (index) => {
    deleteCampaign(index);
  };

  const handleSelectSidebarItem = (itemName) => {
    console.log(`${itemName} selected`);
    // Potential updates based on item selection
  };

  return (
    <div className="layout-container">
      <aside className="sidebar-container">
        {/* Sidebar with selection and refresh handlers */}
        <SideBar onSelect={handleSelectSidebarItem} />
      </aside>
    <div className='main'>
    <h1 className="header-title">Campaign List</h1>
      <ul>
        {/* Display list of campaigns */}
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <span  style={{ paddingRight: '50px' }}>{campaign.name}</span>
            {/* Implement delete button with onClick handler */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default DeleteCampaign;
