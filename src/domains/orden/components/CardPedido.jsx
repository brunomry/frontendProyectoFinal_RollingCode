import { Card, Button, Modal } from 'react-bootstrap';
import '../styles/cardPedido.css';
import { useState } from 'react';
import { METODO_ENVIO } from '../../../helpers/constants';
import { Link } from 'react-router-dom';

const CardPedido = ({ pedido }) => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  const metodoDelEnvio = METODO_ENVIO.find(
    (metodo) => metodo.id == pedido.metodoEnvio
  );

  return (
    <div className='text-start cardOrder p-3 rounded-4'>
      <Modal show={show} onHide={handleShowModal} centered>
        <div className='modalOrder rounded-2 text-white'>
          <div className="d-flex justify-content-between align-items-center p-3">
            <p className='mb-0 align-middle'>Detalles del Pedido</p>
          <a className="text-secondary" onClick={handleShowModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </a>
        </div>
        <Modal.Body>
          <ul>
            {pedido.productos.map((producto) => (
              <li key={producto.id}>
                {producto.producto.nombre} x {producto.cantidad}
              </li>
            ))}
          </ul>
          <p>Forma de envío: {metodoDelEnvio.tipo}</p>
        </Modal.Body>
        </div>
       
      </Modal>
      <Card.Header className='fw-bold text-secondary'>{pedido.fecha}</Card.Header>
      <Card.Body className='d-flex flex-column flex-md-row justify-content-between py-2'>
        <div>
          <p className="text-white mb-0">Código: <span className="text-warning">{pedido._id}</span></p>
        {pedido.estadoEnvio ? (
          <p className=' my-0 pt-0'>
            <span className='text-white me-1'>Estado:</span><span className='text-success '>Entregado</span>
          </p>
        ) : (
          <p className=' my-0 pt-0'>
            <span className='text-white me-1'>Estado:</span><span className='text-warning '>Realizado</span>
          </p>
        )}
        <p className='text-white'>
          Total: <span className='text-success fw-bold'>${pedido.monto}</span>
        </p>
        </div>
      
        <div className='d-flex flex-column gap-2 align-items-center justify-content-center'>
          <Button
            className='btn btn-secondary border-0 text-white w-100'
            onClick={handleShowModal}
          >
            ver detalles del Pedido
          </Button>
          {
            !pedido.estadoEnvio && (
              <Link
              to={`/pedido/detalleCompra`}
            className='btn btnPay text-white w-100'
          >
            Pagar
          </Link>
            )
          }
        </div>
      </Card.Body>
    </div>
  );
};

export default CardPedido;
