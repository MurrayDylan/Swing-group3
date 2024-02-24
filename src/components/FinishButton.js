import React from 'react';

function FinishButton() {
  const handleFinishClick = () => {
    // Display an alert when the button is clicked
    alert('Add tracking pixels to your website now.');
  };

  return (
    <button onClick={handleFinishClick}>Finish</button>
  );
}

export default FinishButton;
