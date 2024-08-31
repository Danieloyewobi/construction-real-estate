import { useEffect } from 'react';
import './Card.css'; // Import the CSS file
import image from '../assets/hero_1.jpg';

const Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index *1000); // Stagger animation by 200ms for each card
    });
  }, []);

  return (
    <div className='bg-light p-5'>
      <h2 className='mt-5 text-center'>Featured Services</h2>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="card">
              <img src={image} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
