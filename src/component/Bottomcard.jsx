// import from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Botton.css'; 

function Bottomcard() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center">
            <img
              className="d-block rounded-circle mb-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe0ONSRG4Ob2h_80PfT7kcqOqqRgxHz2uXQ&s"
              alt="Client 1"
              aria-label="Client 1"
            />
            <Carousel.Caption>
              <p className="lead">
                This is the best service I have ever used. Highly recommend to everyone!
              </p>
              <h5>- Client 1</h5>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center">
            <img
              className="d-block rounded-circle mb-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe0ONSRG4Ob2h_80PfT7kcqOqqRgxHz2uXQ&s"
              alt="Client 2"
              aria-label="Client 2"
            />
            <Carousel.Caption>
              <p className="lead">
                Fantastic experience. The team was professional and exceeded my expectations.
              </p>
              <h5>- Client 2</h5>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center">
            <img
              className="d-block rounded-circle mb-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe0ONSRG4Ob2h_80PfT7kcqOqqRgxHz2uXQ&s"
              alt="Client 3"
              aria-label="Client 3"
            />
            <Carousel.Caption>
              <p className="lead">
                A game-changer in the industry. I’m extremely satisfied with the results.
              </p>
              <h5>- Client 3</h5>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Bottomcard;
