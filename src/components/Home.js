// src/components/Home.js
//import React from 'react';
import { Link } from 'react-router-dom'; // You'll use Link to navigate
import React, { useState } from 'react';

function Home() {
  //const [showaudienceCreation, setShowaudienceCreation] = useState(false);
  return (
    <div>
      <h1>This is Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/AudienceCreation">Create Your Audience</Link></li>
          {/* <button onClick={() => setShowaudienceCreation(true)}>Create your audience</button>
          {showaudienceCreation && <audienceCreation />} */}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
