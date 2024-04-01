import React from 'react';
import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';

const Pedido = () => {
  return (
    <div className='container'>
      <div className='d-flex my-3 breadcrumb'>
        <a href='/Inicio' className='m-0'>
          Inicio
        </a>
        <p className='m-0'>/</p>
        <a href='/menu' className='m-0'>
          Menú
        </a>
        <p className='m-0'> /Mi pedido </p>
      </div>
      <div className='p-4'>
        <h1 className='orderTitle'>Mi pedido</h1>
      </div>
      <ListaProductosUsuario />
      <ResumenPedido />
    </div>
  );
};

export default Pedido;
