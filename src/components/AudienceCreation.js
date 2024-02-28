// src/components/CreationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import CheckboxGroup from './CheckBox';
import CountryDropdown from './Dropdown';
import FinishButton from './FinishButton';
import './CreationPage.css'; // Import the CSS file

const CreationPage = () => {
    // function to use saved text
    const handleSave = (checkedItems) => {
        // Perform save action with checked items
        console.log('Checked items:', checkedItems);
    };

    // function to save checked variables in checkboxes
    const handleSaveCheckbox = (text, isChecked) => {
        // Perform actions with saved data here
        console.log(`Text: ${text}, isChecked: ${isChecked}`);
    };

    const genderLabels = ['Male', 'Female', 'All'];
    const ageLabels = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];

    return (
        <div className="white-text"> {/* Apply the white-text class */}
            <h1>Create Your Audience</h1>
            {/* first input */}
            <p style={{ marginBottom: '5px' }}>1. Brief description of target audience(type keywords related to audience)</p>
            <TextInput onSave={handleSave} />

            {/* second input */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>2. Business and industry of product</p>
            <TextInput onSave={handleSave} />

            {/* demographics input-gender */}
            <h2>Demographics</h2>
            <p style={{ marginBottom: '5px', marginTop: '15px' }}>3. Gender</p>
            <CheckboxGroup labels={genderLabels} onSave={handleSave} />

            {/* demographics input-gender */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>4. Age</p>
            <CheckboxGroup labels={ageLabels} onSave={handleSave} />

            {/* in market */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>5. In-Market (e.g."Users looking to buy new laptop")</p>
            <TextInput onSave={handleSave} />

            {/* interests */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>6. Interests (e.g."Users that frequently read the latest tech industry news")</p>
            <TextInput onSave={handleSave} />

            {/* online activity */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>7. Online Activity (e.g."Users that visit websites that review latest laptops")</p>
            <TextInput onSave={handleSave} />

            {/* past purchases */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>8. Past Purchasers (e.g."Users that have purchased a laptop in the last 30 days")</p>
            <TextInput onSave={handleSave} />

            {/* market region */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>9. Market Region</p>
            <CountryDropdown onSave={handleSave} />

            {/* exclusions */}
            <p style={{ marginBottom: '5px', marginTop: '35px' }}>10. Any required exclusions (e.g."anyone over 50")</p>
            <TextInput onSave={handleSave} />

            <div style={{ marginBottom: '5px', marginTop: '30px' }}>
                <FinishButton />
            </div>
        </div>
    );
}

export default CreationPage;
