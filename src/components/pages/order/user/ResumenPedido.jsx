import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { crearPedidoApi } from '../../../../helpers/queries';
import Swal from 'sweetalert2';
import { METODO_ENVIO } from '../../../../helpers/constants';



const ResumenPedido = ({
  carrito,
  montoCarrito,
  productosCarrito,
  usuarioLogeado,
  setCarrito,
}) => {
  const [metodoEnvio, setMetodoEnvio] = useState(1);

  const confirmarPedido = async () => {
    let carritoAux = [...carrito];
    let productosPedido = [];
    let pedido = new Object();
    let usuario = usuarioLogeado.id; //reemplazar por el id de usuario logueado

    let fecha = new Date().toLocaleString();
    console.log(fecha);

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
    console.log(crearPedidoVar);
    if (crearPedidoVar.ok) {
      sessionStorage.removeItem('carrito');
      setCarrito([]);
      Swal.fire({
        icon: 'success',
        title: 'Su pedido fue generado con exito.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Su pedido no fue generado, vuelva a intentarlo.',
      });
    }
    console.log('pedido: ', pedido);
  };

  return (
    <div className='resumeCardContainer'>
      <div className='resumeCard my-5'>
        <Card className='text-dark'>
          <CardHeader>
            <CardTitle className='mt-2 fw-bold'>Detalles del pedido</CardTitle>
          </CardHeader>
          <CardBody>
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

            <div className='d-flex justify-content-between mt-3 fw-bold'>
              <span>Total</span>
              <span>${montoCarrito}</span>
            </div>
            <hr className='mt-0' />
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-center'>
              {productosCarrito.length > 0 ? (
                <Button
                  onClick={confirmarPedido}
                  className='w-100 fw-bold'
                  variant='success'
                >
                  Confirmar Pedido
                </Button>
              ) : (
                <Link to='/menu' className='w-100 fw-bold btn btn-danger'>
                  Ir al Menú
                </Link>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResumenPedido;
