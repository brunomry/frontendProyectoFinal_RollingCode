import React from 'react';
import '../../styles/nosotros.css';
import CardNosotros from './nosotros/CardNosotros';
import CarruselNosotros from './nosotros/CarruselNosotros';

const Nosotros = () => {
  return (
    <>
      <section className='d-flex flex-column align-items-center justify-content-center mx-auto bannerContainer'>
        <div className='bannerOpacity'> </div>
        <div className='d-flex flex-column align-items-center justify-content-center bannerContent pb-5'>
          <h1>Ambiente Bohemio</h1>
          <p className='w-100 text-center'>
            Ambiente Bohemio surgió para brindar experiencias gastronómicas
            excepcionales. Nuestra pasión por la gastronomía se refleja en cada
            plato que servimos. Nuestro equipo está comprometido en ofrecer un
            servicio de alta calidad. Descubre un lugar donde la comida y la
            atmósfera se fusionan para crear momentos inolvidables!
          </p>
        </div>
      </section>
      <section className='team'>
        <h2 className='text-center m-0 mt-4 fw-bold'>- Nuestro equipo -</h2>
        <article className='cardsContainer d-none d-md-block'>
          <div className='row m-0'>
            <CardNosotros />
            <CardNosotros />
            <CardNosotros />
            <CardNosotros />
          </div>
        </article>
        <div className='carouselSM'>
          <CarruselNosotros />
        </div>
      </section>
    </>
  );
};

export default Nosotros;
