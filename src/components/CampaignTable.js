import React from 'react';
import './CampaignTable.css';

function CampaignTable() {
  const campaign = [
    { name: 'Advertiser_Campaign_Name_Example_1', budget: 1000, spend: 221, kpi: '382% Return on Ad Spend' },
  ];

  return (
    <div className="campaign-table">
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Campaign</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Primary KPI</th>
            
          </tr>
        </thead>
        <tbody>
          {campaign.map((campaign, index) => (
            <tr key={index}>
            
              <td>{campaign.name}</td>
              <td>{campaign.budget}</td>
              <td>{campaign.spend}</td>
              <td>{campaign.kpi}</td>
              {/* 其他单元格 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignTable;
