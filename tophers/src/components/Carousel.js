import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
import images from '../images';

const MyComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <Carousel 
        autoPlay={true} 
        interval={3000} 
        showThumbs={true} 
        selectedItem={currentSlide} 
        onChange={(index) => setCurrentSlide(index)}
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => handleThumbnailClick(index)}>
            <img className="carousel-image" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyComponent;