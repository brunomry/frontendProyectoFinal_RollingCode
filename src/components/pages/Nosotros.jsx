import React from 'react';
import '../../styles/nosotros.css';
import CardNosotros from './nosotros/CardNosotros';
import CarruselNosotros from './nosotros/CarruselNosotros';

const Nosotros = () => {
  return (
    <section>
      <div>
        <div className='bannerContainer'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1>Ambiente Bohemio</h1>
            <p className='fw-bold'>
              Ambiente Bohemio surgió para brindar experiencias gastronómicas
              excepcionales. Nuestra pasión por la gastronomía se refleja en
              cada plato que servimos. Nuestro equipo está comprometido en
              ofrecer un servicio de alta calidad. Descubre un lugar donde la
              comida y la atmósfera se fusionan para crear momentos
              inolvidables!
            </p>
          </div>
        </div>
      </div>
      <h2 className='text-center m-0 mt-4'>- Nuestro equipo -</h2>
      <div className='cardsContainer d-none d-md-block'>
        <div className='row m-0'>
          <CardNosotros />
          <CardNosotros />
          <CardNosotros />
          <CardNosotros />
        </div>
      </div>
      <div className='carouselSM'>
        <CarruselNosotros />
      </div>
    </section>
  );
};

export default Nosotros;
