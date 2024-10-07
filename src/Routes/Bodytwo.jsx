import React, { useState, useEffect } from 'react';
import './Bodytwo.css';

function Bodytwo() {
  // State for storing properties
  const [properties, setProperties] = useState([]);
  // State for search input
  const [searchQuery, setSearchQuery] = useState('');
  // State for filtered properties
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Example list of properties (this can come from an API or database)
  useEffect(() => {
    const mockProperties = [
      { id: 1, name: '3 Bedroom Apartment', location: 'Lagos' },
      { id: 2, name: 'Duplex with Garden', location: 'Abuja' },
      { id: 3, name: 'Land for Sale', location: 'Ibadan' },
      { id: 4, name: 'Luxury Villa', location: 'Port Harcourt' }
    ];
    setProperties(mockProperties);
  }, []);

  // Update filtered properties when searchQuery or properties change
  useEffect(() => {
    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(filtered);
  }, [searchQuery, properties]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // For now, it just filters as you type, but could be used for an API call.
  };

  return (
    <div className="container-fluid custom-container">
      <div className="content p-5">
        <h1 className="mt-3">Kolruf Kenny Nigeria Limited</h1>
        <h3 className="mt-5">
          At Kolruf Kenny Nigeria Limited, we are committed to helping you find the perfect property, 
          whether you are looking to buy, sell, or rent. We also provide high-quality building materials 
          to bring out the best in your home.
        </h3>

        {/* Search Form */}
        <form className="d-flex mt-4" onSubmit={handleSearchSubmit}>
          <input
            className="form-control me-2"
            placeholder="Search for properties"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        {/* Display filtered properties */}
        <div className="mt-5">
          <h4 className="mb-3">Available Properties</h4>
          {filteredProperties.length > 0 ? (
            <ul className="list-group">
              {filteredProperties.map(property => (
                <li key={property.id} className="list-group-item">
                  <strong>{property.name}</strong> - {property.location}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No properties match your search criteria. Try searching with different keywords.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bodytwo;
