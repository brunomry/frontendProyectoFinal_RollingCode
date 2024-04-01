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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium ut reiciendis modi perferendis maxime quis enim!
              Tempora ullam, facere sequi at iusto, labore quidem debitis
              dolorem excepturi et fuga sapiente. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi ratione fuga similique
              inventore nisi officiis totam repellendus, exercitationem
              temporibus minima quos hic excepturi, rem, error ducimus. Optio
              aspernatur earum accusantium?
            </p>
          </div>
        </div>
      </div>
      <div className='cardsContainer d-none d-md-block'>
        <div className='row m-0'>
          <CardNosotros />
          <CardNosotros />
          <CardNosotros />
          <CardNosotros />
        </div>
      </div>
      <div>
        <CarruselNosotros />
      </div>
    </section>
  );
};

export default Nosotros;
