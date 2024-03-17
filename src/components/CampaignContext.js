import React, { createContext, useState } from 'react';

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (newCampaign) => {
    setCampaigns(prevCampaigns => [...prevCampaigns, newCampaign]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};
