import React, { useState } from 'react';

function TextInput({ onSave }) {
    // State used to store input by user
    const [text, setText] = useState('');

    // Handler to update state when typed
    const handleChange = (event) => {
        setText(event.target.value);
    };

    // Handler to save text
    const handleSave = () => {
        onSave(text);
        // // Clearing text after saving
        // setText('');
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type here..."
                style={{ width: '500px', height: '30px'}}
            />
            {/* Button to save text */}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default TextInput;
