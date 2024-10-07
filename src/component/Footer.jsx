import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-light py-4 mt-auto">
      <div className="container">
        <div className="text-center mt-4">
          {/* <p className="mb-0">At BItSOFTEN, we strive to create a seamless experience for our customers, driven by innovation and quality service. Your satisfaction is our priority.</p> */}
          <p className="mb-0">&copy; {new Date().getFullYear()} Kolruf Kenny Nigeria Limited
          . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
