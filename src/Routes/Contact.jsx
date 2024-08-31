// import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Nav from '../component/Nav';
import './Contact.css'
import Footer from '../component/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
    Swal.fire("Thank you!", "Your message has been received.", "success");
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Nav/>
      <div className="custom-mt-sm p-5" style={{marginTop:'30px'}}>
        <div className="row justify-content-center shadow-lg p-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <h2 className="text-center" style={{ color: 'rgb(10,59,73)' }}>
              Contact Us
            </h2>
            <hr style={{ borderColor: 'rgb(251,44,18)' }} />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: 'rgb(10,59,73)' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderColor: 'rgb(10,59,73)' }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email" style={{ color: 'rgb(10,59,73)' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderColor: 'rgb(10,59,73)' }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message" style={{ color: 'rgb(10,59,73)' }}>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  style={{ borderColor: 'rgb(10,59,73)' }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn mt-4 w-100 text-light"
                style={{ backgroundColor: 'rgb(251,44,18)' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
