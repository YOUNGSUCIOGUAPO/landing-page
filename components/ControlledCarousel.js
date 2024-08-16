'use client';
import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroImage1 from '/public/assets/HeroImage1.svg';
import Image from 'next/image';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          src={HeroImage1}
          width={882}
          height={344}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Iphone 14 pro on Discount now</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={HeroImage1}
          width={882}
          height={344}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Iphone 15 pro max is now restocked!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={HeroImage1}
          width={882}
          height={344}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Pre-order the Iphone 16 series</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
