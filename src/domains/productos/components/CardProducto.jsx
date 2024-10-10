import '../styles/cardProducto.css';
import { Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import ModalDetalleProducto from './ModalDetalleProducto';

const CardProducto = ({
  producto,
  agregarProductoCarrito,
  productosCarrito,
  usuarioLogeado
}) => {
  const [abrirModal, setAbrirModal] = useState(false);

  const handleShowModal = () => {
    setAbrirModal(!abrirModal);
  };

  return (
    <>
      <Col md={6} lg={3} className='d-flex justify-content-center mb-4'>
        <div className='cardProduct d-flex flex-column rounded-4 py-3' onClick={handleShowModal} title='Clic para ver más'>
        <div className='w-100 d-flex justify-content-center'>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              title={producto.nombre}
              className='cardImg rounded-circle'
            />
          </div>
          <div className='cardInformation px-3 d-flex flex-column gap-2 justify-content-between'>
            <div className='cardTitle'>
              <p className='mb-0 fw-normal text-center text-white'>{producto.nombre}</p>
              
            </div>
            <p className='text-secondary text-center detailProduct'>{producto.detalle}</p>
              <div>
                <p className='my-0 fw-bold text-center text-success cardPrice'>${producto.precio}</p>
              </div>
              <div className='w-100'>
                {' '}
                <Button
                  className='cardBtn px-md-2 border-0 w-100 rounded-5 py-md-3'
                  onClick={handleShowModal}
                >
                  Comprar
                </Button>
              </div>
           
          </div>
          
        </div>
      </Col>
      <ModalDetalleProducto
        show={abrirModal}
        handleShowModal={handleShowModal}
        productosCarrito={productosCarrito}
        producto={producto}
        agregarProductoCarrito={agregarProductoCarrito}
        usuarioLogeado={usuarioLogeado}
      />
    </>
  );
};

export default CardProducto;
