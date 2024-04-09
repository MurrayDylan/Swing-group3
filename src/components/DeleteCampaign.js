// DeleteCampaign.js
import React, { useContext } from 'react';
import { CampaignContext } from './CampaignContext';

const DeleteCampaign = () => {
  const { campaigns, deleteCampaign } = useContext(CampaignContext);

  const handleDelete = (index) => {
    // Implement logic to delete campaign with the specified index
    // Example: deleteCampaign(index);
  };

  return (
    <div>
      <h2>Campaign List</h2>
      <ul>
        {/* Display list of campaigns */}
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <span>{campaign.name}</span>
            {/* Implement delete button with onClick handler */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCampaign;
