import './error404.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error404 from '../../assets/Error404.webp'

const Error404 = () => {
  return (
    <section className='containerError404 d-flex justify-content-center px-2 sectionTop'>
      <div className='d-flex flex-column containerDescriptionError my-5 px-5 rounded-5 justify-content-center gap-2 text-white'>
          <div className='text-center d-flex flex-column'>
            
            <i className='fa-solid fa-triangle-exclamation fs-1'></i>
            <p>Error404</p>
          </div>
          <h1 className='m-0 m-2 text-center fw-bold'>
            Ocurrió un error inesperado
          </h1>
          <p className='text-center fs-4 fw-bold'>Página no encontrada.</p>
          <div className='text-center mx-3 pb-2'>
            <Button
              variant='secondary'
              className='px-2 py-2 mt-3 fs-5 px-5 rounded-5 py-3'
              as={Link}
              to='/'
            >
              Volver
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Error404;
