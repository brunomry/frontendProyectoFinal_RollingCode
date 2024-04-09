import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import '../../../styles/modalDetalleProducto.css';
import { obtenerProductoAPI } from '../../../helpers/queries';
import Swal from 'sweetalert2';

const ModalDetalleProducto = ({
  show,
  handleShowModal,
  producto,
  agregarProductoCarrito,
}) => {
  const [cantidad, setCantidad] = useState(1);

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
  //Todos los datos del producto vienen desde props, no hace falta llamar a obtenerProductoAPI, se cambio porque no llegan los datos desde el fetch

  // const [productoDetalle, setDetalleProducto] = useState({});
  // useEffect(
  //   (show) => {
  //     cargarDetalle();
  //   },
  //   [show]
  // );

  // const cargarDetalle = async () => {
  //   try {
  //     const respuesta = await obtenerProductoAPI(producto._id);

  //     if (respuesta.status === 200) {
  //       const datosProducto = await respuesta.json();
  //       setDetalleProducto(datosProducto);
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       title: 'Ocurrió un error',
  //       text: 'Intente realizar esta operación en unos minutos',
  //       icon: 'error',
  //     });
  //     handleShowModal();
  //   }
  // };

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
        <h4 className='mb-1'>{producto.nombre}</h4>
        <p className='text-success price mb-1 fw-bold'>${producto.precio}</p>
        <p>{producto.detalle}</p>
        <div>
          <Form.Group className='mb-3'>
            <div className='d-flex flex-row gap-3 gap-md-1 align-items-center justify-content-center quantityProductos mt-2'>
              <Button className='mx-sm-3' variant='secondary' onClick={quitar}>
                -
              </Button>
              {cantidad}
              <Button className='mx-sm-3' variant='secondary' onClick={agregar}>
                +
              </Button>
            </div>
          </Form.Group>
          <div className='d-flex containerBTN'>
            <Button
              className='btn btn-secondary closeBTN'
              onClick={handleShowModal}
            >
              Cerrar
            </Button>
            <Button
              className='addBTN btn-success'
              type='submit'
              onClick={() => {
                agregarProductoCarrito(producto, cantidad);
              }}
            >
              <i className='fa-solid fa-plus fa-lg'></i> Agregar a Mi Pedido
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetalleProducto;
