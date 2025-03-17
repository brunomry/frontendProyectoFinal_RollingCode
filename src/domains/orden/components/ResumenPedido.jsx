import { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { crearPedidoApi } from '../../../helpers/queries/pedidos.queries';
import Swal from 'sweetalert2';
import { METODO_ENVIO } from '../../../helpers/constants';

const ResumenPedido = ({
  carrito,
  montoCarrito,
  productosCarrito,
  usuarioLogeado,
  setCarrito,
}) => {
  const [metodoEnvio, setMetodoEnvio] = useState(1);

  const navegacion = useNavigate();

  const confirmarPedido = async () => {
    let carritoAux = [...carrito];
    let productosPedido = [];
    let pedido = new Object();
    let usuario = usuarioLogeado._id;

    let fecha = new Date().toLocaleString();

    for (let i = 0; i < carritoAux.length; i++) {
      let producto = productosCarrito.find(
        (productoCarrito) => productoCarrito._id == carritoAux[i].producto
      );
      let productoCarrito = {
        id: crypto.randomUUID(),
        producto: producto,
        cantidad: carritoAux[i].cantidad,
      };
      productosPedido.push(productoCarrito);
    }

    pedido.usuario = usuario;
    pedido.monto = montoCarrito;
    pedido.productos = productosPedido;
    pedido.metodoEnvio = metodoEnvio;
    pedido.estadoEnvio = false;
    pedido.fecha = fecha;

    const crearPedidoVar = await crearPedidoApi(pedido);
    if (crearPedidoVar.ok) {
      sessionStorage.removeItem('carrito');
      setCarrito([]);
      Swal.fire({
        icon: 'success',
        title: 'Su pedido fue realizado con éxito.',
      });
      navegacion(`/pedido/misPedidos`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Su pedido no fue realizado, vuelva a intentarlo.',
      });
    }
  };

  return (
    <article className='col-lg-4 mt-5'>
        <Card className='orderSummary rounded-4 text-white p-3'>
          <CardHeader>
            <CardTitle className='mt-2 text-start'>Resumen del Pedido</CardTitle>
          </CardHeader>
          <CardBody>
          <div className='d-flex justify-content-between mt-3 '>
              <span>Subtotal</span>
              <span>${montoCarrito}</span>
            </div>
            {METODO_ENVIO.map((check) => (
              <div className='my-2 d-flex' key={check.id}>
                <input
                  type='radio'
                  name='grup'
                  checked={check.id == metodoEnvio}
                  className='mx-2'
                  value={check.id}
                  onChange={(event) =>
                    setMetodoEnvio(Number(event.target.value))
                  }
                />
                <label htmlFor='delivery'>{check.tipo}</label>
              </div>
            ))}

            <div className='d-flex border-top pt-4 justify-content-between mt-3 fw-bold'>
              <span>Total</span>
              <span>${montoCarrito}</span>
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-center'>
              {productosCarrito.length > 0 ? (
                <button
                  onClick={confirmarPedido}
                  className='w-100 text-white btn btn-secondary rounded-3'
                >
                  Confirmar Pedido
                </button>
              ) : (
                <Link to='/menu' className='w-100 fw-bold btn btn-danger'>
                  Ir al Menú
                </Link>
              )}
            </div>
          </CardFooter>
        </Card>
    </article>
  );
};

export default ResumenPedido;
