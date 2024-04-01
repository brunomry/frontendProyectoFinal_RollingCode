import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import CardNosotros from './CardNosotros';

const CarruselNosotros = () => {
  return (
    <Carousel interval={5000} indicators={0}>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
          <CardNosotros />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
          <CardNosotros />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
          <CardNosotros />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
          <CardNosotros />
        </div>
      </CarouselItem>
    </Carousel>
  );
};

export default CarruselNosotros;
