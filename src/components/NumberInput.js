import React, { useState } from 'react';

function NumberInput({ onSave }) {
    // State used to store input by user
    const [number, setNumber] = useState('');

    // Handler to update state when typed
    const handleChange = (event) => {
        const input = event.target.value;
        // Allow only numbers and decimal points
        if (/^\d*\.?\d*$/.test(input)) {
            setNumber(input);
        }
    };

    // Handler to save number
    const handleSave = () => {
        onSave(number);
        // // Clearing number after saving
        // setNumber('');
    };

    return (
        <div>
            <input
                type="text"
                value={number}
                onChange={handleChange}
                placeholder="Type here..."
                style={{ width: '500px', height: '30px'}}
            />
            {/* Button to save number */}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default NumberInput;
