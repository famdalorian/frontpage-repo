import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/home.css";

import image1 from "../assets/1.jpg";
import image2 from "../assets/hero-image.jpg";
import image3 from "../assets/eyedinal.png";
import image4 from "../assets/ape1.png";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={4}
    >
      <Slider id="mySlider">
        <Slide index={0}>
          <img src={image1} alt="Slide 1" className="carousel-image" />
        </Slide>
        <Slide index={1}>
          <img src={image2} alt="Slide 2" className="carousel-image" />
        </Slide>
        <Slide index={2}>
          <img src={image3} alt="Slide 3" className="carousel-image" />
        </Slide>
        <Slide index={3}>
          <img src={image4} alt="Slide 4" className="carousel-image" />
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
