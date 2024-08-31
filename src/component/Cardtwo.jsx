// import React from 'react';
import image3 from '../assets/building 3.jpg';

function Cardtwo() {
  return (
    <div className="card-fluid row w-75 mt-5 mx-auto shadow-sm rounded p-4">
      <div className="col-md-6 p-0">
        <img src={image3} className="img-fluid w-100 rounded-start" alt="Kolruf Kenny Nigeria LTD" />
      </div>
      <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
        <h3 className="card-title mb-3" style={{color:'rgb(10,59,73)'}}>Kolruf Kenny Nigeria LTD</h3>
        <p className="card-text text-muted mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore quia dolores beatae laudantium fugiat,
          asperiores eligendi, sapiente provident quasi quos nostrum laborum itaque quo fugit iusto repudiandae architecto pariatur.
        </p>
        <button className="btn btn-primary text-light w-50 mx-auto" style={{ backgroundColor: 'rgb(251,44,18)' }}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Cardtwo;
