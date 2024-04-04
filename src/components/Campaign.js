import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campaign.css';

// Component for each item in the sidebar
const SideBarItem = ({ title, onClick }) => (
  <li className="sidebar-item" onClick={onClick}>
    {title}
  </li>
);

// Component for the sidebar with various navigation options
const SideBar = ({ onSelect, onRefresh }) => {
  const navigate = useNavigate();

  // Function to navigate to the campaign creation page
  const goToCampaignCreation = () => {
    navigate('/campaign-creation');
  };

  // Function to navigate to the contact us page
  const navigateToContactUs = () => {
    window.location.href = "https://www.thetradedesk.com/us/contact-us";
  };

  return (
    <nav className="sidebar">
      <ul>
        {/* List of items in the sidebar */}
        <SideBarItem title="Insights" onClick={() => onSelect('Insights')} />
        <SideBarItem title="Campaign Management" onClick={() => onSelect('Campaign Management')} />
        <SideBarItem title="Tracking & Audiences" onClick={() => onSelect('Tracking & Audiences')} />
        {/* Modified to navigate to the contact us page */}
        <SideBarItem title="Academy & Support" onClick={() => navigateToContactUs()} />
        <SideBarItem title="Create Campaign" onClick={goToCampaignCreation} />
        {/* Refresh Data item which triggers resetData function */}
        <SideBarItem title="Refresh Data" onClick={onRefresh} />
      </ul>
    </nav>
  );
};

// Component to display campaign data in a table
const CampaignTable = ({ campaigns }) => (
  <table>
    {/* Table headers */}
    <thead>
      <tr>
        <th>Status</th>
        <th>Campaign</th>
        <th>Budget</th>
        <th>Spend</th>
        <th>Primary KPI</th>
        <th>Base Bid</th>
        <th>Max Bid</th>
        <th>CPM</th>
        <th>Frequency</th>
      </tr>
    </thead>
    <tbody>
      {/* Mapping each campaign to a row in the table */}
      {campaigns.map((campaign, index) => (
        <tr key={index}>
          <td>{campaign.status}</td>
          <td>{campaign.name}</td>
          <td>${campaign.budget}</td>
          <td>${campaign.spend}</td>
          <td>{campaign.primaryKPI}</td>
          <td>${campaign.baseBid}</td>
          <td>${campaign.maxBid}</td>
          <td>${campaign.cpm}</td>
          <td>{campaign.frequency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Main Campaign component
function Campaign() {
  // State variables for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Function to handle sidebar item selection
  const handleSelectSidebarItem = (itemName) => {
    console.log(`${itemName} selected`);
    // Potential updates based on item selections
  };

  // Function to reset filters and campaign data
  const resetData = () => {
    setSearchTerm('');
    setFilter1('');
    setFilter2('');
    setFilter3('');
    setSelectedDate('');
    // Resets campaign data by calling resetCampaigns from context
    // resetCampaigns();
  };

  // Logic to filter campaigns based on filters and search term
  const campaigns = []; // Placeholder for campaigns
  const filteredCampaigns = campaigns.filter(campaign => {
    // Placeholder for actual filtering logic
    return true;
  });

  return (
    <div className="dashboard">
      <aside className="sidebar-container">
        {/* Sidebar with selection and refresh handlers */}
        <SideBar onSelect={handleSelectSidebarItem} onRefresh={resetData} />
      </aside>
      <main className="main-content">
        <div className="search-and-filters">
          {/* Search and filter inputs */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Select inputs for different filters */}
          <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
            <option value="">General Sorting</option>
            <option value="asc">Ascending Amount</option>
            <option value="desc">Descending Amount</option>
          </select>
          <select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
            <option value="">Filter 2</option>
            {/* Placeholder for additional filter options */}
          </select>
          <select value={filter3} onChange={(e) => setFilter3(e.target.value)}>
            <option value="">Filter 3</option>
            {/* Placeholder for additional filter options */}
          </select>
        </div>
        <div className="campaign-controls">
          {/* Campaign table header and date picker */}
          <h2>Campaign Table</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        {/* Table displaying filtered campaigns */}
        <CampaignTable campaigns={filteredCampaigns} />
      </main>
    </div>
  );
}

export default Campaign;
