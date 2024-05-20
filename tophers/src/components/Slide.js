// Slide.js
import React from 'react';

const Slide = ({ image, index }) => (
  <div key={index} className="slide">
    <img src={image} alt={`Slide ${index + 1}`} />
  </div>
);

export default Slide;