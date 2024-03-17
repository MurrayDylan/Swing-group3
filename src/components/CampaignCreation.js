import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import FinishButton from './FinishButton';
import './CreationPage.css';
import NumberInput from './NumberInput';

const CampaignCreation = () => {
    const navigate = useNavigate();

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
                    <p>1. Campaign Name</p>
                    <TextInput onSave={handleSave} />

                    {/* Budget input */}
                    <p>2. Budget</p>
                    <NumberInput onSave={handleSave} />

                    {/* Spend input */}
                    <p>3. Spend</p>
                    <NumberInput onSave={handleSave} />

                    {/* Primary KPI input */}
                    <p>4. Primary KPI (%)</p>
                    <NumberInput onSave={handleSave} />

                    {/* Base Bid input */}
                    <p>5. Base Bid ($)</p>
                    <NumberInput onSave={handleSave} />

                    {/* Max Bid input */}
                    <p>6. Max Bid ($)</p>
                    <NumberInput onSave={handleSave} />

                    {/* CPM input */}
                    <p>7. CPM ($)</p>
                    <NumberInput onSave={handleSave} />

                    {/* Frequency input */}
                    <p>8. Frequency (If unknown put N/A)</p>
                    <TextInput onSave={handleSave} />
                </div>
            </div>

            {/* Fixed footer section */}
            <div style={{ padding: '20px' }}>
                <FinishButton />
            </div>
        </div>
    );
}

export default CampaignCreation;

// Missing onSave function
const handleSave = (checkedItems) => {
    console.log('Checked items:', checkedItems);
};
