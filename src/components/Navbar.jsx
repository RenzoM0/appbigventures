// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo_ventures.png" alt="Logo" height="30" className="d-inline-block align-top" />
        </Link>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-approach">Our Approach</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</Link>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <Link className="dropdown-item" to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/start-project" className="nav-link" style={{ textDecoration: "none" }}>
                <button className="btn custom-start-project-btn">Start Project</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;