// import React from 'react';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import './AboutUs.css';  // Optional for custom styles

const AboutUs = () => {
  return (
    <>
    <Nav/>
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="mb-4 text-center">About Us</h1>
          <p className="lead">
            At <strong>Kolruf Kenny Nigeria Limited</strong>, we are committed to helping you find the perfect property—whether youre looking to buy, sell, or rent. 
            With years of experience in the real estate industry, we provide professional and personalized services tailored to meet your unique needs. 
            Our mission is to make real estate transactions as seamless and stress-free as possible.
          </p>

          <h3>We Specialize In:</h3>
          <ul className="list-unstyled">
            <li><strong>Residential Properties:</strong> From cozy apartments to luxurious homes, we have a wide range of properties for sale or rent that suit every lifestyle.</li>
            <li><strong>Commercial Properties:</strong> Whether you’re starting a new business or expanding your operations, we offer prime commercial spaces that match your vision.</li>
            <li><strong>Land:</strong> For those looking to invest in real estate development, we offer premium land options in strategic locations.</li>
          </ul>

          <h3 className="mt-4">Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li><strong>Local Expertise:</strong> With deep knowledge of the local market, we can guide you to make informed decisions.</li>
            <li><strong>Personalized Service:</strong> We understand that each client’s needs are different, and we take the time to find the right property for you.</li>
            <li><strong>Transparency:</strong> From property listings to closing deals, we ensure complete transparency in every transaction.</li>
            <li><strong>Comprehensive Support:</strong> Our team is with you every step of the way, from initial property searches to final negotiations.</li>
          </ul>

          <h3 className="mt-4">Our Values</h3>
          <ul className="list-unstyled">
            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our business dealings.</li>
            <li><strong>Customer Focus:</strong> Your satisfaction is our top priority. We are dedicated to exceeding your expectations.</li>
            <li><strong>Innovation:</strong> We continuously adapt to the evolving real estate market, utilizing the latest technology to provide better services.</li>
          </ul>

          <h3 className="mt-4 text-center p-4">Meet Our Team</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="/src/assets/CEO.jpeg" alt="Founder" className="img-fluid rounded-circle mb-3" />
              <h5>Founder Name</h5>
              <p>Founder & CEO</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/maneger.jpeg" alt="Executive 1" className="img-fluid rounded-circle mb-3" />
              <h5>Executive Name 1</h5>
              <p>Position</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/team specailist.jpeg" alt="Executive 2" className="img-fluid rounded-circle mb-3" />
              <h5>Executive Name 2</h5>
              <p>Position</p>
            </div>
          </div>

          <p className="mt-4">
            Let us help you find your next home, office, or investment property. 
            At <strong>Kolruf Kenny Nigeria Limited</strong>, your dream is our business!
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
