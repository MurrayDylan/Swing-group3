import { useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { CampaignContext } from './CampaignContext';
import './NewPage.css';

const SideBarItem = ({ title, onClick }) => (
  <li className="sidebar-item" onClick={onClick}>
    {title}
  </li>
);

const SideBar = ({ onSelect, onRefresh }) => {
  const navigate = useNavigate();

  // Function to navigate to the campaign creation page
  const goToCampaignCreation = () => {
    navigate('/campaign-creation');
  };

  const navigateToContactUs = () => {
    navigate('/new-page');
  };

  // Function to navigate to the delete campaign page
  const goToDeleteCampaign = () => {
    navigate('/manage');
  };

  return (
    <nav className="sidebar">
      <ul>
        {/* List of items in the sidebar */}
        <SideBarItem title="Insights" onClick={() => navigate('/Campaign')} /> 
        <SideBarItem title="Tracking & Audiences" onClick={() => onSelect('Tracking & Audiences')} />
        <SideBarItem title="Academy & Support" onClick={() => navigateToContactUs()} />
        <SideBarItem title="Create Campaign" onClick={goToCampaignCreation} />
        {/* New sidebar item for delete campaign page */}
        <SideBarItem title="Campaign Management" onClick={goToDeleteCampaign} />
        {/* Refresh Data item which triggers resetData function */}
        <SideBarItem title="Refresh Data" onClick={onRefresh} />
      </ul>
    </nav>
  );
};

const NewPage = () => {

  const handleSelectSidebarItem = (itemName) => {
    console.log(`${itemName} selected`);
    // Potential updates based on item selection
  };

  const handleButtonClick = () => {
    window.location.href = "https://www.thetradedesk.com/us/contact-us";
  };

  return (
    <div className="layout-container">
      <aside className="sidebar-container">
        {/* Sidebar with selection and refresh handlers */}
        <SideBar onSelect={handleSelectSidebarItem} />
      </aside>
      {/* Main content section */}
      <main className="new-page-content">
        {/* Fixed header section */}
        <header className="new-page-header">
          <h1 className="header-title">Installing Pixels</h1>
        </header>

        {/* Scrollable content section */}
        <section className="new-page-section">
          {/* Introduction to New Page */}
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
