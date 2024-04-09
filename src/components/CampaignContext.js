import React, { createContext, useState } from 'react';

// Creating the context
export const CampaignContext = createContext();

// Provider component for CampaignContext
export const CampaignProvider = ({ children }) => {
  // State for storing campaigns
  const [campaigns, setCampaigns] = useState([]);

  // Function to add a new campaign to the campaigns state
  const addCampaign = (newCampaign) => {
    // Updates the campaigns state by appending the new campaign
    setCampaigns(prevCampaigns => [...prevCampaigns, newCampaign]);
  };

  // Function to reset the campaigns state to an empty array
  const resetCampaigns = () => {
    // Sets campaigns back to an empty array
    setCampaigns([]);
  };

  const deleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
  }

  // Providing the campaigns state, addCampaign and resetCampaigns functions to the context
  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign, resetCampaigns, deleteCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};
