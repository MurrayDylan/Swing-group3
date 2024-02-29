import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoundedButton.css'; 

const RoundedButton = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="rounded-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default RoundedButton;
