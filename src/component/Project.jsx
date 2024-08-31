// import React from 'react';
import './Project.css'; // Assuming you're using an external CSS file

function Project() {
  const images = [
    '/src/assets/building 1.jpg',
    '/src/assets/building 2.jpg',
    '/src/assets/building 4.jpg',
  ];

  return (
    <div className="container-fluid p-5 bg-light">
      <h5 className='text-center' style={{fontSize:"40px",fontFamily:''}}>Our Project</h5>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={image} className="card-img-top project-image" alt={`Project ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
