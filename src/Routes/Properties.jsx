import { useState } from 'react';
import './Properties.css'; 
import land1 from '../assets/land 1.jpg';
import land2 from '../assets/land 2.jpeg';
import land3 from '../assets/land 3.jpeg';
import houseSale1 from '../assets/property showroom-NG on Instagram_ “5 bedroom house with Cinema , large living spaces and excellent finish_  Lekky county homes , Ikota , Lekki , Lagos  Price - 135M  Call-…”.jpeg';
import houseSale2 from '../assets/5 Bedroom Fully Detached Duplex For Sale.jpeg';
import houseSale3 from '../assets/download (16).jpeg';
import houseRent1 from '../assets/download (16).jpeg';
import houseRent2 from '../assets/download (16).jpeg';
import houseRent3 from '../assets/download (16).jpeg';
import Footer from '../component/Footer';
import Nav from '../component/Nav';

function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const landListings = [
    { name: 'Spacious Land Plot', description: 'Nestled in a prime location, this expansive plot is perfect for your dream home or business.', price: '$150,000', image: land1, contact: 'https://wa.me/7031829259' },
    { name: 'Prime Land for Sale', description: 'Located in a serene environment, this prime land is ideal for future development.', price: '$200,000', image: land2, contact: 'https://wa.me/7031829259' },
    { name: 'Affordable Land Plot', description: 'This affordable plot offers an excellent chance to own land in a fast-growing area.', price: '$100,000', image: land3, contact: 'https://wa.me/7031829259' },
  ];

  const houseSaleListings = [
    { name: 'Luxury Family Home', description: 'This luxury home boasts modern finishes, a spacious garden, and a prime location.', price: '$500,000', image: houseSale1, contact: 'https://wa.me/7031829259' },
    { name: 'Modern Family Home', description: 'Sleek architecture and state-of-the-art interiors, perfect for luxury living.', price: '$550,000', image: houseSale2, contact: 'https://wa.me/7031829259' },
    { name: 'Spacious Family Home', description: 'Elegantly designed, situated in a quiet neighborhood, perfect for families.', price: '$520,000', image: houseSale3, contact: 'https://wa.me/7031829259' },
  ];

  const houseRentListings = [
    { name: 'Cozy Rental Home', description: 'A charming house available for short-term or long-term rental.', price: '$1,200/month', image: houseRent1, contact: 'https://wa.me/7031829259' },
    { name: 'Charming Cottage', description: 'This quaint cottage-style home is ideal for peaceful living.', price: '$1,100/month', image: houseRent2, contact: 'https://wa.me/7031829259' },
    { name: 'Modern Rental Home', description: 'A stylish rental home with modern amenities and a beautiful garden.', price: '$1,300/month', image: houseRent3, contact: 'https://wa.me/7031829259' },
  ];

  const allProperties = [...landListings, ...houseSaleListings, ...houseRentListings];

  const filteredProperties = allProperties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPropertyCard = (property) => (
    <div className="property-card" key={property.name}>
      <img src={property.image} alt={property.name} className="property-image" />
      <div className="property-info">
        <h4 className="property-name">{property.name}</h4>
        <p className="property-description">{property.description}</p>
        <p className="property-price">{property.price}</p>
        <a href={property.contact} target="_blank" rel="noopener noreferrer">
          <button className="property-button">Contact Seller</button>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Nav/>
      {/* Search Form */}
      <div className="container-fluid custom-container">
        <div className="content p-5">
          <h1 className='mt-3 text-light'>Kolruf Kenny Nigeria Limited</h1>
          <h3 className='mt-4 text-light'>Find your dream property</h3>
          <form className="d-flex mb-5">
            <input 
              className="form-control me-2" 
              placeholder="Search" 
              type="search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>

      {/* Properties List */}
      <div className="properties-container p-5" id="properties">
        <h2 className="properties-title mt-5">Available Properties</h2>

        {filteredProperties.length > 0 ? (
          <div className="properties-list">
            {filteredProperties.map((property) => renderPropertyCard(property))}
          </div>
        ) : (
          <p>No properties found</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Properties;
