import React from 'react';
import './NewPage.css'; // Import the corresponding CSS file for styling

const NewPage = () => {

  const handleButtonClick = () => {
    window.location.href = "https://www.thetradedesk.com/us/contact-us";
  };


  return (
    <div className="new-page-container">
      {/* Fixed header section */}
      <header className="new-page-header">
        <h1 className="header-title">Installing Pixels</h1>
      </header>

      {/* Scrollable content section */}
      <main className="new-page-content">
        {/* Introduction to New Page */}
        <section className="new-page-section">
          <h2 className="section-title">Improve your Campaign using Pixels</h2>
          <ul className="section-bullet-points">
            <li>Measure the reach and effectiveness of your digital ads</li>
            <li>Understand user engagement with different elements of your marketing strategies</li>
            <li>Optimize your content for better conversion rates</li>
            <li>Retarget users who have shown interest in your products and services</li>
          </ul>
          <div style={{ marginTop: '40px' }}>
            <p style={{ fontFamily: 'FrankRuehl' }}>For detailed instructions, check out our <a href="https://partner.thetradedesk.com/v3/portal/data/doc/TrackingTagsUniversalPixel">installation guide</a>.</p>
            <p style={{ fontFamily: 'FrankRuehl' }}>More guidance: Explore this <a href="https://www.youtube.com/watch?v=WazafPAYdOo">tutorial video</a>.</p>
          </div>
        </section>

        {/* Support message and contact button */}
        <section className="support-section">
          <div className="support-message">
            <div style={{ marginTop: '55px' }}>
              <p style={{ fontFamily: 'Arial, sans-serif', marginBottom: '3px' }}>Contact our Customer Service for further assistance.</p>
              <button className="contact-button" onClick={handleButtonClick}>Get Support</button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default NewPage;
