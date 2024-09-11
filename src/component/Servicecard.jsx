// import React from 
import image1 from '../assets/sharp sand.jpeg';
import image2 from '../assets/wood.jpeg';
import image3 from '../assets/Gas price hike to cost local iron & steel industry an extra RM100m a year.jpeg';
import image4 from '../assets//Dangote Cement Factory (2).jpeg';
import './card2.css';

function Servicecard() {
  return (
    
    <div className="service-fluid container mt-5 shadow-sm">
      <h4 className='text-center'>We Also sell:</h4>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100 shadow-lg rounded animate-card">
            <img src={image1} className="card-img-top rounded-top" alt="Service 1" />
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="card-text text-center">
                Service 1: Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100 shadow-lg rounded animate-card">
            <img src={image2} className="card-img-top rounded-top" alt="Service 2" />
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="card-text text-center">
                Service 2: Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100 shadow-lg rounded animate-card">
            <img src={image3} className="card-img-top rounded-top" alt="Service 3" />
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="card-text text-center">
                Service 3: Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100 shadow-lg rounded animate-card">
            <img src={image4} className="card-img-top rounded-top" alt="Service 4" />
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="card-text text-center">
                Service 4: Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicecard;
