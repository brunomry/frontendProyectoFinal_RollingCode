import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import CardNosotros from './CardNosotros';

const CarruselNosotros = () => {
  return (
    <Carousel>
      <CarouselItem>
        <CardNosotros />
      </CarouselItem>
      <CarouselItem>
        <CardNosotros />
      </CarouselItem>
      <CarouselItem>
        <CardNosotros />
      </CarouselItem>
      <CarouselItem>
        <CardNosotros />
      </CarouselItem>
    </Carousel>
  );
};

export default CarruselNosotros;
