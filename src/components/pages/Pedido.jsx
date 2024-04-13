import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { leerProductosAPI } from '../../helpers/queries';
import Load from '../common/Load';

const Pedido = ({
  usuarioLogeado,
  carrito,
  productosCarrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
  montoCarrito,
  setCarrito,
}) => {
  if (!productosCarrito) {
    return <Load />;
  }

  if (carrito.length == 0) {
    return (
      <div className='bannerPedido d-flex flex-column justify-content-center'>
        <div className='bannerPedidoContent'>
          <h2 className='bannerTitlePedido titleColor text-center mt-5'>
            Tu pedido está vacío.
          </h2>
          ;
          <div className='text-center '>
            <Link to='/menu' className='fw-bold btn btn-danger'>
              Ir al Menú
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='bannerPedido border-1 border-secondary border-top'>
      <div className='container'>
        <div className='py-2 pb-md-4'>
          <h1 className='orderTitle fw-bold'>- Mi pedido -</h1>
        </div>
        <ListaProductosUsuario
          carrito={carrito}
          productosCarrito={productosCarrito}
          agregarCantidadProducto={agregarCantidadProducto}
          quitarCantidadProducto={quitarCantidadProducto}
          quitarProductoCarrito={quitarProductoCarrito}
        />
        <ResumenPedido
          usuarioLogeado={usuarioLogeado}
          carrito={carrito}
          productosCarrito={productosCarrito}
          montoCarrito={montoCarrito}
          setCarrito={setCarrito}
        />
      </div>
    </section>
  );
};

export default Pedido;
