import { Button, Modal } from 'react-bootstrap';
import '../../../styles/administrador.css';
import { useState } from 'react';
import { editarPedidoAPI } from '../../../helpers/queries';

const ItemPedido = ({ listaUsuarios, pedido }) => {
  const [show, setShow] = useState(false);
  const [estadoPedido, setEstadoPedido] = useState(pedido.estadoEnvio);

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario._id == pedido.usuario
  );

  console.log(pedido);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('Usuario:', usuarioEncontrado);
  return (
    <tr>
      <td>{usuarioEncontrado.nombreCompleto}</td>
      <td>${pedido.monto}</td>
      <td>
        <>
          <Button variant='primary' onClick={handleShow}>
            Ver detalles
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {pedido.productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.producto.nombre + ' X' + producto.cantidad}
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </td>
      <td>
        <Button className='me-lg-2 btn btn-warning'>
          {estadoPedido ? 'Enviado' : 'Pendiente'}
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
