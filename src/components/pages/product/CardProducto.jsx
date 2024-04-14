import '../../../styles/cardProducto.css';
import { Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import ModalDetalleProducto from '../product/ModalDetalleProducto';

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
      <Col md={6} lg={6} className='d-flex justify-content-center'>
        <div className='cardProduct d-flex justify-content-between'>
          <div className='cardInformation d-flex flex-column gap-2 justify-content-between'>
            <div className='cardTitle'>
              <h5 className='pt-0'>{producto.nombre}</h5>
            </div>
            <div className='cardDescription'>
              <p className='cardParagraph'>{producto.detalle}</p>
            </div>
            <div className='flexPriceAndBtn w-100'>
              <div className='cardPrice text-center'>
                <p>${producto.precio}</p>
              </div>
              <div className='text-center containerBtnCard'>
                {' '}
                <Button
                  className='cardBTN shadow px-md-3 border border-dark border-1'
                  onClick={handleShowModal}
                >
                  ver más
                </Button>
              </div>
            </div>
          </div>
          <div className='cardIMGContainer'>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              title={producto.nombre}
              className='cardIMG rounded-end'
            />
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
