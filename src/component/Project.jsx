import { useState } from 'react';
import './Properties.css'; 
import land1 from '../assets/land1.jpg'; 
import land2 from '../assets/land2.jpeg'; 
import land3 from '../assets/land3.jpeg'; 
import houseSale1 from '../assets/houseSale1.jpeg'; 
import houseSale2 from '../assets/houseSale2.jpeg'; 
import houseSale3 from '../assets/houseSale3.jpeg'; 
import houseRent1 from '../assets/houseRent1.jpeg'; 
import houseRent2 from '../assets/houseRent2.jpeg'; 
import houseRent3 from '../assets/houseRent3.jpeg'; 
import Footer from '../component/Footer';
import Nav from './Nav';

function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const landListings = [
    { name: 'Spacious Land Plot', description: 'Nestled in a prime location, perfect for your dream home or business.', price: '$150,000', image: land1, contact: 'https://wa.me/7031829259' },
    { name: 'Prime Land for Sale', description: 'Located in a serene environment, ideal for future development.', price: '$200,000', image: land2, contact: 'https://wa.me/7031829259' },
    { name: 'Affordable Land Plot', description: 'Affordable plot offering a chance to own land in a fast-growing area.', price: '$100,000', image: land3, contact: 'https://wa.me/7031829259' },
  ];

  const houseSaleListings = [
    { name: 'Luxury Family Home', description: 'Luxury home with modern finishes, spacious garden, and prime location.', price: '$500,000', image: houseSale1, contact: 'https://wa.me/7031829259' },
    { name: 'Modern Family Home', description: 'Sleek architecture, state-of-the-art interiors, perfect for luxury living.', price: '$550,000', image: houseSale2, contact: 'https://wa.me/7031829259' },
    { name: 'Spacious Family Home', description: 'Elegant design in a quiet neighborhood, perfect for families.', price: '$520,000', image: houseSale3, contact: 'https://wa.me/7031829259' },
  ];

  const houseRentListings = [
    { name: 'Cozy Rental Home', description: 'Charming house available for short-term or long-term rental.', price: '$1,200/month', image: houseRent1, contact: 'https://wa.me/7031829259' },
    { name: 'Charming Cottage', description: 'Quaint cottage-style home, ideal for peaceful living.', price: '$1,100/month', image: houseRent2, contact: 'https://wa.me/7031829259' },
    { name: 'Modern Rental Home', description: 'Stylish rental home with modern amenities and a beautiful garden.', price: '$1,300/month', image: houseRent3, contact: 'https://wa.me/7031829259' },
  ];

  const allProperties = [...landListings, ...houseSaleListings, ...houseRentListings];

  const filteredProperties = allProperties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPropertyCard = (property) => (
    <div className="col-md-4 mb-4" key={property.name}>
      <div className="property-card shadow-sm rounded">
        <img src={property.image} alt={`Image of ${property.name}`} className="property-image rounded-top" />
        <div className="property-info p-3">
          <h4 className="property-name">{property.name}</h4>
          <p className="property-description text-muted">{property.description}</p>
          <p className="property-price"><strong>{property.price}</strong></p>
          <a href={property.contact} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary w-100">Contact Seller</button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Nav/>

      {/* Search Bar */}
      <div className="container mt-5">
        <h1 className="text-center">Kolruf Kenny Nigeria Limited</h1>
        <h3 className="text-center mt-4 mb-5 text-light">Find your dream property</h3>
        <form className="d-flex justify-content-center mb-5">
          <input 
            className="form-control rounded-pill w-50" 
            placeholder="Search by name or description" 
            type="search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </form>
      </div>

      {/* Properties List */}
      <div className="container-fluid properties-container" id="properties">
        <h2 className="text-center mb-4">Available Properties</h2>
        <div className="row">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => renderPropertyCard(property))
          ) : (
            <p className="text-center">No properties found</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Properties;
