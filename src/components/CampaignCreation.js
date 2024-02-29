import React from 'react';
import TextInput from './TextInput';
import FinishButton from './FinishButton';
import './CreationPage.css'; // Make sure this file contains the necessary CSS for responsiveness
import NumberInput from './NumberInput';

const CampaignCreation = () => {
    // function to use saved text
    const handleSave = (checkedItems) => {
        // Perform save action with checked items
        console.log('Checked items:', checkedItems);
    };

    return (
        <div className="main-container" style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Fixed header section */}
            <h1 className="white-text">Create Your Campaign</h1>

            {/* Scrollable content section */}
            <div style={{ overflowY: 'auto', flex: 1 }}>
                {/* Rest of the components */}
                <div className="white-text" style={{ padding: '0 20px' }}> {/* Adjust padding as necessary */}
                    {/* Brief description input */}
                    <p>1. Campaign Name</p>
                    <TextInput onSave={handleSave} />

                    {/* Business and industry input */}
                    <p>2. Budget</p>
                    <NumberInput onSave={handleSave} />

                    {/* Business and industry input */}
                    <p>3. Spend</p>
                    <NumberInput onSave={handleSave} />

                    <p>4. Primary KPI (%)</p>
                    <NumberInput onSave={handleSave} />

                    <p>5. Base Bid ($)</p>
                    <NumberInput onSave={handleSave} />

                    <p>6. Max Bid ($)</p>
                    <NumberInput onSave={handleSave} />

                    <p>7. CPM ($)</p>
                    <NumberInput onSave={handleSave} />

                    <p>8. Frequency (If unknown put N/A)</p>
                    <TextInput onSave={handleSave} />
                </div>
            </div>

            {/* Fixed footer section */}
            <div style={{ padding: '20px' }}> {/* Adjust padding as necessary */}
                <FinishButton />
            </div>
        </div>
    );
}

export default CampaignCreation;
