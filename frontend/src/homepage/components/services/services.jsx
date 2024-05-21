import React from 'react';
import './services.css';
import grid1 from '../../assests/grid1.png'
import grid4 from '../../assests/grid 4.png'
import grid5 from '../../assests/grid5.png'
const Services = () => {
  return (
    <section id="Services" className="services spaced">
      <div className="container">
        <div className="section-title">
          <h2>Available Modules</h2>
          <p>e-Bloodbank<sup>@NIC</sup> Web Application have all the necessary modules for a Standard Blood bank.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <img src={grid1} width="70px" height="70px" alt="Donor Management" />
              </div>
              <h4>Donor Management</h4>
              <p>Pre-screening of Applicant, Checking Registration parameters, Capturing Vital parameters, Capture Applicant Blood Group (From Analyser)</p>
            </div>
          </div>

    

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <img src={grid4} width="70px" height="70px" alt="Blood Camp Management" />
              </div>
              <h4>Blood Camp Management</h4>
              <p>Camp Registration, Allocation Of No, Camp Donor Entry, Generate e-Donor Card.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <img src={grid5} width="70px" height="70px" alt="Receive & Transfer of Blood" />
              </div>
              <h4>Receive & Transfer of Blood</h4>
              <p>Transfer of Stock Between mother Bloodbank and Storage Center, Receive Stock, Detailed MIS.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
