import { useEffect } from 'react';
import './Card.css'; // Import the CSS file
import image from '../assets/house 1.jpg';

const Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 1000); // Stagger animation by 1 second for each card
    });
  }, []);

  const houses = [
    {
      id: 1,
      title: "3 Bedroom Apartment for Rent",
      price: "$1,200/month",
      location: "Lagos, Nigeria",
      image: image,
      description: "Spacious 3-bedroom apartment in a secure neighborhood, close to shopping malls and schools."
    },
    {
      id: 2,
      title: "Luxury Villa for Sale",
      price: "$350,000",
      location: "Abuja, Nigeria",
      image: image,
      description: "Beautiful luxury villa with modern amenities, large garden, and a private pool."
    },
    {
      id: 3,
      title: "2 Bedroom House for Rent",
      price: "$900/month",
      location: "Port Harcourt, Nigeria",
      image: image,
      description: "Cozy 2-bedroom house with a large kitchen and private parking. Perfect for small families."
    },
    {
      id: 4,
      title: "4 Bedroom House for Rent",
      price: "$1,500/month",
      location: "Enugu, Nigeria",
      image: image,
      description: "Large 4-bedroom house with a spacious living area and a garden."
    },
    {
      id: 5,
      title: "Penthouse for Sale",
      price: "$500,000",
      location: "Lagos, Nigeria",
      image: image,
      description: "Modern penthouse with a rooftop terrace and stunning city views."
    },
    {
      id: 6,
      title: "Studio Apartment for Rent",
      price: "$700/month",
      location: "Abuja, Nigeria",
      image: image,
      description: "Compact studio apartment ideal for singles or couples, located in the city center."
    }
  ];

  return (
    <div className='bg-light p-5'>
      <h2 className='mt-5 text-center' style={{color:'rgb(10,59,73)'}}>Available Properties</h2>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <div className="row justify-content-center mb-4 mt-5">
          {houses.map((house) => (
            <div className="col-md-4" key={house.id}>
              <div className="card">
                <img src={house.image} className="card-img-top" alt={house.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{color:'rgb(10,59,73)'}}>{house.title}</h5>
                <p className="card-text" style={{color:'rgb(10,59,73)'}}>{house.description}</p>
                  <p className="card-text" style={{color:'rgb(10,59,73)'}}><strong>Price: </strong>{house.price}</p>
                  <p className="card-text" style={{color:'rgb(10,59,73)'}}><strong>Location: </strong>{house.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
