import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
import images from '../images';
import Slide from './Slide';

const MyComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>&lt;</button>
      <Carousel showThumbs={true} selectedItem={currentSlide} onChange={setCurrentSlide}>
        {images.map((image, index) => (
          <Slide image={image} index={index} key={index} />
        ))}
      </Carousel>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default MyComponent;