// import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <>
      <div className='bodyone'>  
        <nav className="navbar navbar-expand-lg custom-navbar p-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                <a className="nav-link text-light" href="#">Services</a>
                <a className="nav-link text-light" href="#">About</a>
                <a className="nav-link text-light" href="#">Contact</a>
                <a className="nav-link text-light">FAQs</a>
              </div>
            </div>
          </div>
        </nav>

        <div className='text-dark' style={{fontSize:'30px',marginLeft:'20px',marginTop:'104px',fontWeight:'40px'}}>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. </div>
      </div>
    </>
  );
}

export default Nav;
