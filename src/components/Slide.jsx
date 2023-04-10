import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Uploads/slide/1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Uploads/slide/2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Uploads/slide/3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Uploads/slide/4.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;