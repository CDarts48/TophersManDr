import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import all images from the workpics folder
const importAll = (r) => r.keys().map((item) => ({ workpics: r(item).default }));
const images = importAll(require.context('../../public/workpics', false, /\.(png|jpe?g|svg)$/));

const MyCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.workpics} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;