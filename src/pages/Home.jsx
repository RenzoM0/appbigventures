import React from 'react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';

// Images services import
import pitchDecksImage from '../assets/pitch-decks.jpeg';
import valuationsImage from '../assets/valuations.jpeg';
import businessPlanningImage from '../assets/business-planning.jpeg';
import capitalizationTablesImage from '../assets/capitalization-tables.jpeg';

function Home() {
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Your Partner in Growth</h1>
          <h3 className="fw-normal text-muted mb-3">
            We help businesses tell their stories by crafting powerful presentations and sensible valuations to investors
          </h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <Link className="icon-link" to="/services">Learn more</Link>
            <Link className="btn btn-primary" to="/start-project">Start Project</Link>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      {/* Services Section */}
      <div className="container marketing">
        <h1>Our services</h1>
        <p>From crafting compelling pitch decks to building financial models - we are your trusted and dedicated partner every step of the way when it's time to confidently and effectively ask for the capital you need.</p>
        <div className='row'>
          <div className="col-lg-3 text-center">
            <img src={pitchDecksImage} width="140" height="140" alt="Pitch Decks & Sales Decks" className="rounded-circle" />
            <h2 className="fw-normal">Pitch Decks & Sales Decks</h2>
          </div>
          <div className="col-lg-3 text-center">
            <img src={valuationsImage} width="140" height="140" alt="Valuations & Financial Modelling" className="rounded-circle" />
            <h2 className="fw-normal">Valuations & Financial Modelling</h2>
          </div>
          <div className="col-lg-3 text-center">
            <img src={businessPlanningImage} width="140" height="140" alt="Business Planning & CIM" className="rounded-circle" />
            <h2 className="fw-normal">Business Planning & CIM</h2>
          </div>
          <div className="col-lg-3 text-center">
            <img src={capitalizationTablesImage} width="140" height="140" alt="Capitalization Tables" className="rounded-circle" />
            <h2 className="fw-normal">Capitalization Tables</h2>
          </div>
        </div>
        <Link className="btn btn-primary" to="/services">Learn more</Link>
      </div>
      {/* Partners + Sector Sections */}
      <Partners />
    </>
  );
};

export default Home;