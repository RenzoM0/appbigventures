import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Logo Section */}
        <div className="footer-header">
          <div className="footer-logo">
            <img src="/logo_ventures.png" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
            <p className="footer-text">All trademarks and copyrights belong to their respective owners.</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="footer-tabs">
          <div className="tab">
            <h4>Overview</h4>
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-approach">Our Approach</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="tab">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/pitch-decks">Pitch Decks</Link></li>
              <li><Link to="/services/valuations">Valuations & Fin Model</Link></li>
              <li><Link to="/services/business-plan">Business Plan & CIM</Link></li>
              <li><Link to="/services/cap-tables">Cap Tables</Link></li>
            </ul>
          </div>
          <div className="tab">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/terms">Terms of Services</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;