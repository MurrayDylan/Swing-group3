import React from 'react';
import TextInput from './TextInput';
import CheckboxGroup from './CheckBox';
import CountryDropdown from './Dropdown';
import FinishButton from './FinishButton';
import './CreationPage.css'; // Make sure this file contains the necessary CSS for responsiveness

const CreationPage = () => {
    // function to use saved text
    const handleSave = (checkedItems) => {
        // Perform save action with checked items
        console.log('Checked items:', checkedItems);
    };

    const genderLabels = ['Male', 'Female', 'Non-Binary', 'Prefer Not to Say'];
    const ageLabels = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];

    return (
        <div className="main-container" style={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Fixed header section */}
            <h1 className="white-text">Create Your Audience</h1>

            {/* Scrollable content section */}
            <div style={{ overflowY: 'auto', flex: 1 }}>
                {/* Rest of the components */}
                <div className="white-text" style={{ padding: '0 20px' }}> {/* Adjust padding as necessary */}
                    {/* Brief description input */}
                    <p>1. Brief description of target audience (type keywords related to audience)</p>
                    <TextInput onSave={handleSave} />

                    {/* Business and industry input */}
                    <p>2. Business and industry of product</p>
                    <TextInput onSave={handleSave} />

                    {/* Demographics input - Gender */}
                    <h2>Demographics</h2>
                    <p>3. Gender</p>
                    <CheckboxGroup labels={genderLabels} onSave={handleSave} />

                    {/* Demographics input - Age */}
                    <p>4. Age</p>
                    <CheckboxGroup labels={ageLabels} onSave={handleSave} />

                    {/* In market input */}
                    <p>5. In-Market (e.g., "Users looking to buy a new laptop")</p>
                    <TextInput onSave={handleSave} />

                    {/* Interests input */}
                    <p>6. Interests (e.g., "Users that frequently read the latest tech industry news")</p>
                    <TextInput onSave={handleSave} />

                    {/* Online activity input */}
                    <p>7. Online Activity (e.g., "Users that visit websites that review the latest laptops")</p>
                    <TextInput onSave={handleSave} />

                    {/* Past purchases input */}
                    <p>8. Past Purchases (e.g., "Users that have purchased a laptop in the last 30 days")</p>
                    <TextInput onSave={handleSave} />

                    {/* Market region input */}
                    <p>9. Market Region</p>
                    <CountryDropdown onSave={handleSave} />

                    {/* Exclusions input */}
                    <p>10. Any required exclusions (e.g., "exclude anyone over 50")</p>
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

export default CreationPage;
