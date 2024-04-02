import React from 'react';
import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const Pedido = () => {
  return (
    <div className='container'>
      <Breadcrumb className='my-3'>
        <BreadcrumbItem href='/inicio'>Inicio</BreadcrumbItem>
        <BreadcrumbItem href='/menu'>Menu</BreadcrumbItem>
        <BreadcrumbItem href='#'>Mi pedido</BreadcrumbItem>
      </Breadcrumb>
      <div className='p-4'>
        <h1 className='orderTitle fw-bold'>Mi pedido</h1>
      </div>
      <ListaProductosUsuario />
      <ResumenPedido />
    </div>
  );
};

export default Pedido;
