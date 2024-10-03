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
      <Col md={6} lg={3} className='d-flex'>
        <div className='cardProduct border d-flex flex-column rounded-2'>
        <div className='w-100'>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              title={producto.nombre}
              className='cardImg rounded-top  w-100'
            />
          </div>
          <div className='cardInformation p-2 d-flex flex-column gap-2 justify-content-between'>
            <div className='cardTitle'>
              <p className='pt-0 fw-normal'>{producto.nombre}</p>
            </div>
              <div>
                <p className='mt-0 fw-bold'>${producto.precio}</p>
              </div>
              <div className='w-100 mt-3'>
                {' '}
                <Button
                  className='cardBtn px-md-2 border-0 w-100'
                  onClick={handleShowModal}
                >
                  Ver más
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
