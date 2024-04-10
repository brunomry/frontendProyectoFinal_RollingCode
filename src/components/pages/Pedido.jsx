import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Pedido = ({
  carrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
  montoCarrito,
}) => {
  return (
    <section className='border-1 border-secondary border-top'>
      <div className='container'>
        <Breadcrumb className='pt-4 pt-md-5 pb-2'>
          <BreadcrumbItem href='/'>inicio</BreadcrumbItem>
          <BreadcrumbItem href='/menu'>menu</BreadcrumbItem>
          <BreadcrumbItem active className='text-dark'>
            Mi pedido
          </BreadcrumbItem>
        </Breadcrumb>
        <div className='py-2 pb-md-4'>
          <h1 className='orderTitle fw-bold'>- Mi pedido -</h1>
        </div>
        <ListaProductosUsuario
          carrito={carrito}
          agregarCantidadProducto={agregarCantidadProducto}
          quitarCantidadProducto={quitarCantidadProducto}
          quitarProductoCarrito={quitarProductoCarrito}
        />
        <ResumenPedido montoCarrito={montoCarrito} />
      </div>
    </section>
  );
};

export default Pedido;
