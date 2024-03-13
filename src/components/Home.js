import React from 'react';
import './Home.css'; // Import the CSS file
import logoImage from '../assets/finch-logo.png'; 
//import videoBackground from '../assets/LiveBackground2.mp4'; // Import the video file

function Home() {
  return (
    <>
      <img src={logoImage} alt="Finch Mini Trade Desk Logo" className="App-logo" />
      <div className="white-text"> {/* Apply the white-text class */}
        {/* <div className="video-background"> */}
          {/* <video autoplay="autoplay" loop="loop" muted="muted" playsInline>
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        {/* </div> */}
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
    </>
  );
}

export default Home;
