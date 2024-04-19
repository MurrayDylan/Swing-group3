import React, { useState } from 'react';

function CheckboxGroup({ labels, onSave }) {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (label) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }));
    };

    const handleSave = () => {
        // Perform save action with checked items
        onSave(checkedItems);
    };

    return (
        <div>
            {labels.map((label, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={checkedItems[label]}
                        onChange={() => handleCheckboxChange(label)}
                    />
                    <label>{label}</label>
                </div>
            ))}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default CheckboxGroup;
