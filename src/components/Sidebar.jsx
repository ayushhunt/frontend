import React, { useState } from 'react';
import { FaTachometerAlt, FaUser, FaRegCommentDots, FaChartPie, FaFolder, FaShoppingCart, FaHeart, FaCog } from 'react-icons/fa';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); // Manage sidebar toggle state

  const toggleSidebar = () => {
    setIsActive(!isActive); // Toggle the 'active' class
  };

  return (
    <nav className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo-menu">
        <h2 className="logo">Side Bar</h2>
        <div className='toggle-btn' onClick={toggleSidebar}>
          <FaTachometerAlt size={24} />
        </div>
      </div>
      <ul className="list">
        <li className="list-item active">
          <a href="#">
            <FaTachometerAlt size={24} />
            <span className="link-name" style={{ "--i": 1 }}>Dashboard</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaUser size={24} />
            <span className="link-name" style={{ "--i": 2 }}>User</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaRegCommentDots size={24} />
            <span className="link-name" style={{ "--i": 3 }}>Message</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaChartPie size={24} />
            <span className="link-name" style={{ "--i": 4 }}>Analytics</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaFolder size={24} />
            <span className="link-name" style={{ "--i": 5 }}>File Manager</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaShoppingCart size={24} />
            <span className="link-name" style={{ "--i": 6 }}>Order</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaHeart size={24} />
            <span className="link-name" style={{ "--i": 7 }}>Saved</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <FaCog size={24} />
            <span className="link-name" style={{ "--i": 8 }}>Setting</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
