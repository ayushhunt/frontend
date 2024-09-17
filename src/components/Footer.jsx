import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaMedium, FaTelegram } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  console.log("here");
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="section">
          <h3 className="logo">TataStrive</h3>
        </div>

        <div className="section">
          <h4 className="heading">Our Community</h4>
          <ul className="list">
            <li className="listItem"><a href="#staff" className="link">Staff</a></li>
            <li className="listItem"><a href="#students" className="link">Students</a></li>
          </ul>
        </div>

        <div className="section">
          <h4 className="heading">Institute</h4>
          <ul className="list">
            <li className="listItem"><a href="#about" className="link">About Us</a></li>
            <li className="listItem"><a href="#careers" className="link">Careers</a></li>
            <li className="listItem"><a href="#contact" className="link">Contact Us</a></li>
          </ul>
        </div>

        <div className="section">
          <h4 className="heading">Further Information</h4>
          <ul className="list">
            <li className="listItem"><a href="#terms" className="link">Terms & Conditions</a></li>
            <li className="listItem"><a href="#privacy" className="link">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="section">
          <h4 className="heading">Follow Us</h4>
          <div className="socialIcons">
            <a href="https://www.facebook.com" className="icon">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="icon">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="icon">
              <FaLinkedin />
            </a>
            <a href="https://medium.com" className="icon">
              <FaMedium />
            </a>
            <a href="https://telegram.org" className="icon">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;