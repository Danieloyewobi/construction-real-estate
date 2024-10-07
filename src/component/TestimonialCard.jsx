// Importing necessary libraries
// import React from "react";
import { Container, Carousel, Card } from "react-bootstrap";
import "./TestimonialCard.css"; // Ensure the correct path

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Tech Innovations",
    quote: "This platform has significantly improved our sales and streamlined our operations. Highly recommend!",
    image: "src/assets/CEO.jpeg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director, Fresh Foods",
    quote: "A game-changer for local sellers looking to reach a global market. Excellent service and support!",
    image: "src/assets/CEO.jpeg",
  },
  {
    name: "Carlos Garcia",
    title: "Freelancer",
    quote: "Fast, reliable, and easy to use. This service has helped me grow my business beyond borders.",
    image: "src/assets/CEO.jpeg", 
  },
];

const TestimonialCard = ({ testimonial }) => (
  <Card className="testimonial-card shadow-sm">
    <Card.Img
      variant="top"
      src={testimonial.image}
      alt={testimonial.name}
      className="rounded-circle mx-auto mt-4"
      style={{ width: "100px", height: "100px", objectFit: "cover" }} // Added styling to control image size
    />
    <Card.Body>
      <Card.Title className="text-center">{testimonial.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">{testimonial.title}</Card.Subtitle>
      <Card.Text className="text-center">"{testimonial.quote}"</Card.Text>
    </Card.Body>
  </Card>
);

const TestimonialPage = () => {
  return (
    <section className="testimonial-section py-5">
      <Container>
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialPage;
