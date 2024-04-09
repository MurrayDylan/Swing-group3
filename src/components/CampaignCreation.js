import React, { useState, useContext } from 'react';
import { CampaignContext } from './CampaignContext';
import { useNavigate } from 'react-router-dom';
import './CreationPage.css';

const CampaignCreation = () => {
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
        frequency: ''
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

    // Function to go back to the previous page
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="main-container" style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header and back button container */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* Back button */}
                <button onClick={handleBack} style={{ margin: '10px' }}>
                    Back
                </button>
                {/* Fixed header section */}
                <h1 className="white-text" style={{ alignSelf: 'center' }}>Create Your Campaign</h1>
            </div>

            {/* Scrollable content section */}
            <div style={{ overflowY: 'auto', flex: 1 }}>
                <div className="white-text" style={{ padding: '0 20px' }}>
                    {/* Campaign Name input */}
                    <p>Campaign Name</p>
                    <input 
                    value={newCampaign.name} 
                    onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} 
                    />

                    {/* Budget Input */}
                    <p>Budget</p>
                    <input
                        value={newCampaign.budget}
                        onChange={e => setNewCampaign({ ...newCampaign, budget: e.target.value })}
                    />

                    {/* Spend Input */}
                    <p>3. Spend</p>
                    <input
                        value={newCampaign.spend}
                        onChange={e => setNewCampaign({ ...newCampaign, spend: e.target.value })}
                    />

                    {/* Primary KPI Input */}
                    <p>4. Primary KPI (%)</p>
                    <input
                        value={newCampaign.primaryKPI}
                        onChange={e => setNewCampaign({ ...newCampaign, primaryKPI: e.target.value })}
                    />

                    {/* Base Bid Input */}
                    <p>5. Base Bid ($)</p>
                    <input
                        value={newCampaign.baseBid}
                        onChange={e => setNewCampaign({ ...newCampaign, baseBid: e.target.value })}
                    />

                    {/* Max Bid Input */}
                    <p>6. Max Bid ($)</p>
                    <input
                        value={newCampaign.maxBid}
                        onChange={e => setNewCampaign({ ...newCampaign, maxBid: e.target.value })}
                    />

                    {/* CPM Input */}
                    <p>7. CPM ($)</p>
                    <input
                        value={newCampaign.cpm}
                        onChange={e => setNewCampaign({ ...newCampaign, cpm: e.target.value })} 
                    />

                    {/* Frequency Input */}
                    <p>8. Frequency (If unknown put N/A)</p>
                    <input 
                    value={newCampaign.frequency} 
                    onChange={e => setNewCampaign({ ...newCampaign, frequency: e.target.value })} 
                    />
                </div>
            </div>

            {/* Fixed footer section */}
            <button onClick={handleSave} style={{ padding: '10px 20px', margin: '20px 0' }}>
            Save Campaign
            </button>
        </div>
    );
}

export default CampaignCreation;
