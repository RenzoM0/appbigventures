import React from 'react';
import './AboutUs.css';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';
import founderImage from '../assets/founder.jpeg';

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <h1 className="main-title">About Us</h1>
        <h2 className="subtitle">WE ARE<br />VENTURE BUILDERS</h2>
        <p className="mission-statement">
          Our Mission: To empower businesses on their growth journey and help them reach their true potential
        </p>
      </div>

      {/* Meet the Founder Section */}
      <div className="founder-container">
        <div className="founder-section">
          <img src={founderImage} alt="Alex Cheung" className="founder-image" />
          <div className="founder-text">
            <h3 className="founder-title">Meet the Founder</h3>
            <h4 className="founder-name">Alex Cheung</h4>
            <p className="founder-description">
              A strong passion for business, finance, and start-ups led Alex to establish big2 ventures. He began his career in the start-up scene in Rotterdam, where he quickly learned the challenges businesses face when seeking investment. Recognizing the power of compelling storytelling in securing funding for growth and expansion, he founded big2 ventures to assist businesses in this aspect.
            </p>
            <p className="founder-detail">
              Alex's background includes work in private equity, banking, and management consulting, working in deal origination and advising on large M&A transactions and carve-outs for both corporates and the private equity sector.
            </p>
            <p className="founder-detail">
              Originally from Amsterdam, he now divides his time between Germany and the Netherlands, where he lives with his wife and their French Bulldog.
            </p>
          </div>
        </div>
      </div>
      {/* TODO: Our philosophy */}
      <h1>Our philosophy</h1>
      {/* Our Partners Section */}
      <Partners />
      {/* Reviews Section */}
      <Reviews />
    </>
  )
}

export default AboutUs;