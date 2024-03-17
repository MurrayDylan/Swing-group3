import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campaign.css';

const SideBarItem = ({ title, onClick }) => (
  <li className="sidebar-item" onClick={onClick}>
    {title}
  </li>
);

const SideBar = ({ onSelect }) => {
  const navigate = useNavigate();

  const goToCampaignCreation = () => {
    navigate('/campaign-creation');
  };

  return (
    <nav className="sidebar">
      <ul>
        <SideBarItem title="Insights" onClick={() => onSelect('Insights')} />
        <SideBarItem title="Campaign Management" onClick={() => onSelect('Campaign Management')} />
        <SideBarItem title="Tracking & Audiences" onClick={() => onSelect('Tracking & Audiences')} />
        <SideBarItem title="Academy & Support" onClick={() => onSelect('Academy & Support')} />
        <SideBarItem title="Create Campaign" onClick={goToCampaignCreation} />
      </ul>
    </nav>
  );
};

const CampaignTable = ({ campaigns }) => (
  <table>
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

function Campaign() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  const campaigns = [
    // ... your campaign data
  ];

  const handleSelectSidebarItem = (itemName) => {
    console.log(`${itemName} selected`);
    // Update state or navigate based on item selection
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    // Implement filtering logic here
    return true;
  });

  return (
    <div className="dashboard">
      <aside className="sidebar-container">
        <SideBar onSelect={handleSelectSidebarItem} />
      </aside>
      <main className="main-content">
        <div className="search-and-filters">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
            <option value="">General Sorting</option>
            <option value="asc">Ascending Amount</option>
            <option value="desc">Descending Amount</option>
          </select>
          <select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
            <option value="">Filter 2</option>
            {/* Additional Filter 2 options */}
          </select>
          <select value={filter3} onChange={(e) => setFilter3(e.target.value)}>
            <option value="">Filter 3</option>
            {/* Additional Filter 3 options */}
          </select>
        </div>
        <div className="campaign-controls">
          <h2>Campaign Table</h2>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
        </div>
        <CampaignTable campaigns={filteredCampaigns} />
      </main>
    </div>
  );
}

export default Campaign;
