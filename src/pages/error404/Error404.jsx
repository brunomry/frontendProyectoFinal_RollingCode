import './error404.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error404 from '../../assets/Error404.webp'

const Error404 = () => {
  return (
    <section className='errorSection d-flex justify-content-center py-2 sectionTop'>
      <div className='d-flex flex-column gap-2'>
        <article className=''>
          <img
            src={error404}
            alt='error 404'
            title='error 404'
            className='imgError404'
          />
        </article>
        <article className='pb-2'>
          <div className='text-center'>
            <i className='fa-solid fa-triangle-exclamation fs-1'></i>
          </div>
          <h1 className='m-0 m-2 text-center fw-bold'>
            Ocurrió un error inesperado
          </h1>
          <p className='text-center fs-4 fw-bold'>Página no encontrada.</p>
          <div className='text-center mx-3 pb-2'>
            <Button
              variant='dark'
              className='px-2 py-2 px-md-4 mt-3 fs-5'
              as={Link}
              to='/'
            >
              Volver al INICIO.
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Error404;
