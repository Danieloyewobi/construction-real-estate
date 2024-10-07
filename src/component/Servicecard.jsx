import './Servicecard.css';
import houseImage from '/src/assets/house 2.jpg'; // Import your image here

function Servicecard() {
  return (
    <>
      <h3 className='text-title text-center mt-5'>Why Choose Us</h3>
      
      <div className="service-card mb-3 bg-light mt-5 p-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={houseImage} className="img-fluid rounded-start" alt="Comprehensive Listings" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Comprehensive Listings</h5>
              <p className="card-text">
                Discover a diverse selection of properties and building materials tailored to meet your needs.
                Whether youre looking for your dream home or quality materials for your next project, our extensive listings offer a variety of options. Our platform features detailed descriptions, high-resolution images, and all the information you need to make informed decisions. From cozy apartments to luxurious homes and top-grade building materials, find everything in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="service-card mb-3 bg-light mt-5 p-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={houseImage} className="img-fluid rounded-start" alt="Quality Building Materials" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Quality Building Materials</h5>
              <p className="card-text">
                Access premium building materials for all your construction needs.
                We pride ourselves on offering top-notch building materials sourced from trusted suppliers. Our inventory includes everything from durable cement to stylish tiles, ensuring you get the best quality for your projects. With competitive prices and a commitment to excellence, we support you in building or renovating with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="service-card mb-3 bg-light mt-5 p-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={houseImage} className="img-fluid rounded-start" alt="Expert Guidance" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Expert Guidance</h5>
              <p className="card-text">
                Benefit from professional advice and support every step of the way.
                Navigating the real estate market or choosing the right materials can be challenging. Our team of experts is here to guide you through the process, offering personalized advice and insights tailored to your specific needs. Whether youre buying a home or selecting building materials, our knowledgeable staff is dedicated to helping you achieve the best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicecard;
