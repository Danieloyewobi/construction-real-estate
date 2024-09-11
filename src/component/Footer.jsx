import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-light py-4 mt-auto ">
      <div className="container p-2">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">About Us</h5>
            <p>
              We are a company dedicated to providing the best products and services to our customers. Our commitment is to quality and customer satisfaction.
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:info@company.com" className="text-light">info@company.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a></li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex social-icons">
              <li className="me-3">
                <a href="#" className="text-light fs-4" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-light fs-4" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-light fs-4" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-light fs-4" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} BItSOFTEN TEAM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
