import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/cardPedido.css';
import { useState } from 'react';
import { METODO_ENVIO } from '../../../helpers/constants';

const CardPedido = ({ pedido }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const metodoDelEnvio = METODO_ENVIO.find(
    (metodo) => metodo.id == pedido.metodoEnvio
  );

  return (
    <div className='text-start card cardPedido border border-1 border-dark shadow'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {pedido.productos.map((producto) => (
              <li key={producto.id}>
                {producto.producto.nombre} X{producto.cantidad}
              </li>
            ))}
          </ul>
          <h4>Metodo del envio: {metodoDelEnvio.tipo}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Card.Header className='fw-bold'>{pedido.fecha}</Card.Header>
      <Card.Body>
        {pedido.estadoEnvio ? (
          <p className='text-success fw-bold mt-0 pt-0 text-center text-sm-start'>
            Entregado
          </p>
        ) : (
          <p className='text-warning fw-bold mt-0 pt-0 text-center text-sm-start'>
            Realizado
          </p>
        )}
        <Card.Text className='text-center'>
          Total: <span className='text-danger'>${pedido.monto}</span>
        </Card.Text>
        <div className='d-flex flex-column gap-2 flex-sm-row align-items-center justify-content-sm-center align-items-sm-start px-lg-5 pt-3'>
          <Button
            className='btn border btnDetailsOrder text-white fw-bold'
            onClick={handleShow}
          >
            Ver Detalles del Pedido
          </Button>
          <Link className='btn border text-white btnBuy fw-bold' to='/*'>
            Volver a Comprar
          </Link>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardPedido;
