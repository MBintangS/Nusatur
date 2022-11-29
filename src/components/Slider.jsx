import React from "react";
import { Carousel, Container } from "react-bootstrap";
import img1 from "../img/Frame1.png";
import img2 from "../img/Frame2.png";
import img3 from "../img/Frame3.png";
import img4 from "../img/Frame4.png";
import img5 from "../img/Frame5.png";
import "../styles/slider.css";

const Slider = () => {
  return (
    <div className="container-slider">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="m-auto d-block w-50" src={img1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="m-auto d-block w-50"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="m-auto d-block w-50" src={img3} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="m-auto d-block w-50"
              src={img4}
              alt="Fourth slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="m-auto d-block w-50" src={img5} alt="Fift slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
