// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // You'll use Link to navigate

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
