// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3  fixed-top" style={{ backgroundColor: 'rgb(10,59,73)', transition: 'background-color 0.3s ease' }}>
        <div className="container-fluid" style={{marginLeft:'10px'}}>
          <a className="navbar-brand text-light" href="#" style={{ marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Inter', fontWeight: 'bolder' }}>Kolruf Kenny Nigeria Limited</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav" style={{ gap: '20px', fontFamily: 'Inter', fontWeight: 'unset' }}>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}}About to="/">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}} to="/service">Service</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}} to="/Properties">Properties</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}}to="/about">AboutUs</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}} to="/contact">Contact Us</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#" style={{ transition: 'color 0.3s ease' }}><Link className="text-light" style={{textDecoration:'none'}} to="/faq">FAQs</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
