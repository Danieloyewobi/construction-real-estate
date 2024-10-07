// import React from 'react';
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import "./Service.css"; // Assuming you're using a separate CSS file for custom styles

import cementImage from '../assets/Dangote Cement Factory (2).jpeg';
import bricksImage from '../assets/Brick.jpeg';
import steelRodsImage from '../assets/Steel Rods.jpeg';
import roofingSheetsImage from '../assets/Roofing Sheets.jpeg';
import woodPlanksImage from '../assets/Wood Planks.jpeg';
import tilesImage from '../assets/Tiles.webp';
import gravelImage from '../assets/Gravel.jpeg';
import concreteBlocksImage from '../assets/Concrete Blocks.jpeg';
import paintImage from '../assets/buckets of paint.jpeg';

const products = [
  {
    title: "Cement",
    description: "High-quality cement for strong and durable construction.",
    whatsappNumber: "+2348136900957",
    image: cementImage, // Imported image
  },
  {
    title: "Bricks",
    description: "Durable bricks perfect for building walls and foundations.",
    whatsappNumber: "+2348136900957",
    image: bricksImage,
  },
  {
    title: "Steel Rods",
    description: "Premium steel rods for reinforced concrete structures.",
    whatsappNumber: "+2348136900957",
    image: steelRodsImage,
  },
  {
    title: "Roofing Sheets",
    description: "Weather-resistant roofing sheets for your building.",
    whatsappNumber: "+2348136900957",
    image: roofingSheetsImage,
  },
  {
    title: "Wood Planks",
    description: "Strong and reliable wood planks for construction.",
    whatsappNumber: "+2348136900957",
    image: woodPlanksImage,
  },
  {
    title: "Tiles",
    description: "High-quality tiles for interior and exterior decoration.",
    whatsappNumber: "+2348136900957",
    image: tilesImage,
  },
  {
    title: "Gravel",
    description: "Perfectly sized gravel for landscaping and construction.",
    whatsappNumber: "+2348136900957",
    image: gravelImage,
  },
  {
    title: "Concrete Blocks",
    description: "Durable concrete blocks for solid foundation work.",
    whatsappNumber: "+2348136900957",
    image: concreteBlocksImage,
  },
  {
    title: "Paint",
    description: "High-quality paint for both indoor and outdoor use.",
    whatsappNumber: "+2348136900957",
    image: paintImage,
  },
];

function Service() {
  return (
    <>
      <Nav />
      <div className="container mt-4 p-5">  
        <h3 className="top-text text-center mb-4">Building Materials for Sale</h3>
        <div className="row service-container">
          {products.map((product, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a
                    href={`https://wa.me/${product.whatsappNumber.replace("+", "")}`}
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Seller
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Service;
