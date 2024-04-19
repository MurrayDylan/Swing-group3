import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinishButton() {
  const navigate = useNavigate();

  const handleFinishClick = () => {
    // Display an alert when the button is clicked
    const confirm = window.confirm('Add tracking pixels to your website now.');
    if (confirm) {
      // Navigate to the new page
      navigate('/new-page'); // Change '/new-page' to your desired route
    }
  };

  return <button onClick={handleFinishClick}>Finish</button>;
}

export default FinishButton;

