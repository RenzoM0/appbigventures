import React from 'react';
import './Partners.css';  // Import the CSS styles

// Images companies import
import AlternateBank from '../assets/companies/AlternaBank_logo.png';
import ARTS from '../assets/companies/ARTS_logo.png';
import BOGO from '../assets/companies/bogo_logo.png';
import ChefPaw from '../assets/companies/chefpaw_logo.png';
import CrownCapital from '../assets/companies/CrownCapital_logo.jpg';
import Ethera from '../assets/companies/Ethera_logo.png';
import Innovet from '../assets/companies/Innovet_logo.jpg';
import Pepsico from '../assets/companies/Pepsico_logo.png';
import RCTA from '../assets/companies/rcta_logo.png';
import Revium from '../assets/companies/revium_logo.png';
import UOEH from '../assets/companies/uoeh_logo.png';
import WEDO from '../assets/companies/wedo_logo.png';

// Images sectors import
import Blockchain from '../assets/sectors/blockchain.png'
import Business from '../assets/sectors/business.png'
import Consumer from '../assets/sectors/consumer_goods.png'
import CPU from '../assets/sectors/cpu.png'
import Education from '../assets/sectors/education.png'
import Finance from '../assets/sectors/finance.png'
import RealEstate from '../assets/sectors/realestate.png'

const Partners = () => {
  // List of partner images
  const partnersList = [
    { img: AlternateBank, alt: "Alterna Bank" },
    { img: ARTS, alt: "ARTS" },
    { img: BOGO, alt: "BOGO" },
    { img: ChefPaw, alt: "Chef Paw" },
    { img: CrownCapital, alt: "Crown Capital" },
    { img: Ethera, alt: "Ethera" },
    { img: Innovet, alt: "Innovet" },
    { img: Pepsico, alt: "PepsiCo" },
    { img: RCTA, alt: "RCTA" },
    { img: Revium, alt: "Revium" },
    { img: UOEH, alt: "UOEH" },
    { img: WEDO, alt: "WEDO" },
  ];

  // List of sectors images
  const sectorsList = [
    { img: Blockchain, text: 'Blockchain' },
    { img: Business, text: 'Business' },
    { img: Consumer, text: 'Consumer Goods' },
    { img: CPU, text: 'CPU' },
    { img: Education, text: 'Education' },
    { img: Finance, text: 'Finance' },
    { img: RealEstate, text: 'Real Estate' },
  ];

  return (
    <div className="container mt-5">
      {/* Partners Row */}
      <h1 className="text-center mb-4">Our Partners</h1>
      <div className="row">
        {partnersList.map((partner, index) => (
          <div className="col-6 col-md-4 col-lg-3 text-center" key={index}>
            <img src={partner.img} alt={partner.alt} className="img-fluid partner-logo" />
          </div>
        ))}
      </div>

      {/* Sectors Row */}
      <div className="row mt-5">
        <div className="col-md-2 mb-4 text-center align-self-center">
          <h2>Sectors</h2>
        </div>
        <div className="col-md-10 sector-images-container">
          <div className="sector-images-wrapper">
            {sectorsList.map((sector, index) => (
              <div
                className="d-flex flex-column align-items-center text-center sector-item"
                key={index}
              >
                <img src={sector.img} alt={sector.text} className="img-fluid sector-logo" />
                <p>{sector.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;