import React from 'react';
import './NewPage.css'; // Import the corresponding CSS file for styling

const NewPage = () => {
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
        </section>
      </main>
    </div>
  );
}

export default NewPage;
