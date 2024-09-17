import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signout">Sign Out</Link></li>
          <li><Link to="/profile" className="profile-button">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
