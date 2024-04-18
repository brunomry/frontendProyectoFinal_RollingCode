import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../styles/cardPedido.css';

const CardPedido = ({ pedido }) => {
  return (
    <div className='text-start card cardPedido border border-1 border-dark shadow'>
      <Card.Header>{pedido.fecha}</Card.Header>
      <Card.Body>
        {pedido.estadoEnvio ? (
          <p className='text-warning fw-bold mt-0 pt-0 text-center text-sm-start'>
            Realizado
          </p>
        ) : (
          <p className='text-success fw-bold mt-0 pt-0 text-center text-sm-start'>
            Entregado
          </p>
        )}

        <Card.Text className='text-center'>
          Total: <span className='text-danger'>${pedido.monto}</span>
        </Card.Text>
        <div className='d-flex flex-column gap-2 flex-sm-row align-items-center justify-content-sm-center align-items-sm-start px-lg-5 pt-3'>
          <button className='btn border btnDetailsOrder text-white fw-bold'>
            Ver Detalles del Pedido
          </button>
          <Link className='btn border text-white btnBuy fw-bold' to='/*'>
            Volver a Comprar
          </Link>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardPedido;
