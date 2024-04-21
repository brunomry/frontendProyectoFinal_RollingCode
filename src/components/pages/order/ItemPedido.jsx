import { Button, Modal } from 'react-bootstrap';
import '../../../styles/administrador.css';
import { useState } from 'react';
import { editarPedidoAPI } from '../../../helpers/queries';
import Swal from 'sweetalert2';
import { METODO_ENVIO } from '../../../helpers/constants';

const ItemPedido = ({ listaUsuarios, pedido }) => {
  const [show, setShow] = useState(false);
  const [estadoPedido, setEstadoPedido] = useState(pedido.estadoEnvio);

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario._id == pedido.usuario
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cambiarEstadoEnvio = async () => {
    if (pedido.estadoEnvio) {
      pedido.estadoEnvio = false;
    } else {
      pedido.estadoEnvio = true;
    }
    await editarPedidoAPI(pedido, pedido._id);
    Swal.fire({
      icon: 'success',
      title: 'El estado del Pedido fue actualizado correctamente.',
    });
    setEstadoPedido(pedido.estadoEnvio);
  };

  const metodoDelEnvio = METODO_ENVIO.find(
    (metodo) => metodo.id == pedido.metodoEnvio
  );

  return (
    <tr>
      <td>{usuarioEncontrado ? usuarioEncontrado.nombreCompleto : "[Usuario eliminado]" }</td>
      <td>{pedido.fecha}</td>
      <td>${pedido.monto}</td>
      <td>
        <>
          <Button variant='primary' onClick={handleShow} className='w-100'>
            Ver detalles
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Productos:</h5>
              <ul>
                {pedido.productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.producto.nombre + ' X' + producto.cantidad}
                  </li>
                ))}
              </ul>
              <h5>Metodo del envio: {metodoDelEnvio.tipo}</h5>
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
        <Button
          className={`me-lg-2 btn fw-bold w-100 ${estadoPedido ? "btn-success" : " btn-warning "}`}
          onClick={cambiarEstadoEnvio}
        >
          {estadoPedido ? 'Enviado' : 'Pendiente'}
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
