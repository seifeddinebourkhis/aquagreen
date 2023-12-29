import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlidePage = () => {
  const slideRef = useRef(null);

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: 'ease',
    size: 5,
    indicators: i => <div className="indicator">{i + 1}</div>,
  };

  const slideImages = [
    'https://www.arrosage-distribution.fr/media/wp/slide1.jpg',
    'https://www.arrosage-distribution.fr/media/wp/slide2.jpg',
  ];

  

  const allSlideImages = [...slideImages]; // Combine both arrays

  return (
    <div className="slide-page-container" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="slide-container" style={{ width: '100%' }}>
        <Slide ref={slideRef} {...properties}>
          {allSlideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <img className="lazy" src={each} alt={`slide-${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Slide>
      </div>
      <div className="slide-container buttons">
        <button onClick={back} type="button">
          Go Back
        </button>
        <button onClick={next} type="button">
          Go Next
        </button>
      </div>
    </div>
  );
};

export default SlidePage;
