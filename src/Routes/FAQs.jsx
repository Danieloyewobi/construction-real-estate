// Import necessary libraries and components
// import React from 'react';
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import Accordion from 'react-bootstrap/Accordion';

function FAQs() {
  return (
    <>
      <Nav />
      <div className="container mt-5 p-5 shadow-lg">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is the purpose of this website?</Accordion.Header>
            <Accordion.Body>
              This website is designed to facilitate the purchase and delivery of raw food and other essential items directly from local marketers to consumers, making shopping more convenient and accessible.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I place an order?</Accordion.Header>
            <Accordion.Body>
              You can place an order by browsing the available products, adding them to your cart, and then proceeding to checkout where you can enter your delivery details and make payment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What payment methods are accepted?</Accordion.Header>
            <Accordion.Body>
              We accept a variety of payment methods including credit/debit cards, bank transfers, and mobile payment options for your convenience.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How long does delivery take?</Accordion.Header>
            <Accordion.Body>
              Delivery times vary depending on your location, but most orders are delivered within 1-3 business days. You will receive updates on your order status via email or SMS.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Can I track my order?</Accordion.Header>
            <Accordion.Body>
              Yes, you can track your order through the My Orders section on your account page. You will also receive tracking information via email once your order has been dispatched.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>What is your return policy?</Accordion.Header>
            <Accordion.Body>
              We offer a flexible return policy for products that are damaged or not as described. You can initiate a return within 7 days of receiving your order by contacting our customer support.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer/>
    </>
  );
}

export default FAQs;
