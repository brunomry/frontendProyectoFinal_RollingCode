import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import '../styles/modalDetalleProducto.css';
import { Link } from 'react-router-dom';

const ModalDetalleProducto = ({
  show,
  handleShowModal,
  producto,
  agregarProductoCarrito,
  productosCarrito,
  usuarioLogeado,
}) => {
  const [cantidad, setCantidad] = useState(1);
  const [productoEncontrado, setProductoEncontrado] = useState();

  const agregar = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
    if (productosCarrito) {
      const productoEncontradoAux = productosCarrito.find(
        (productoCarrito) => productoCarrito._id == producto._id
      );

      setProductoEncontrado(productoEncontradoAux);
    }
  }, [productosCarrito]);

  return (
    <Modal show={show} onHide={handleShowModal} centered className='modal'>
      <Modal.Header className='modalHeaderIMGContainer'>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          title={producto.nombre}
          className='modalIMG'
        />
      </Modal.Header>
      <Modal.Body className='pt-1'>
      <p className='price mb-1 fw-bold'>${producto.precio}</p>
        <p className='mb-1 fw-normal'>{producto.nombre}</p>   
        <p className='fw-normal text-secondary'>{producto.detalle}</p>
        <div>
          {!productoEncontrado && usuarioLogeado.rol != 'Administrador' && (
            <Form.Group className='mb-3'>
              <div className='d-flex flex-row gap-3 gap-md-1 align-items-center justify-content-center quantityProductos mt-2'>
                <Button
                  className='mx-sm-3'
                  variant='secondary'
                  onClick={quitar}
                >
                  -
                </Button>
                {cantidad}
                <Button
                  className='mx-sm-3'
                  variant='secondary'
                  onClick={agregar}
                >
                  +
                </Button>
              </div>
            </Form.Group>
          )}
          <div className='d-flex containerBTN mt-3'>
            <Button
              className='btn closeBTN'
              onClick={handleShowModal}
            >
              Cerrar
            </Button>
            {productoEncontrado && usuarioLogeado.rol != 'Administrador' && (
              <Link to='/pedido/miPedido' className='btn btn-danger mt-3'>
                Ir al carrito
              </Link>
            )}
            {!productoEncontrado && usuarioLogeado.rol != 'Administrador' && (
              <Button
                className='btnAddProduct'
                type='submit'
                onClick={() => {
                  agregarProductoCarrito(producto, cantidad);
                }}
              >
                <i className='fa-solid fa-plus fa-lg'></i> Agregar a Mi Pedido
              </Button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetalleProducto;
