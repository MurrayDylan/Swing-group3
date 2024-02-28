import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="white-text"> {/* Apply the white-text class */}
      <div className='home'>
        <div className="welcome-container">
          <h1>Welcome to Finch Mini Trade Desk</h1>
        </div>
        <div className="description-container">
          <p className="description">
            Here is a brief description about Finch Mini Trade Desk. Learn more about our features, services, and how we can help you manage your trades more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
