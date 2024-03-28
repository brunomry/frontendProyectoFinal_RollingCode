import React from 'react';
import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';

const Pedido = () => {
  return (
    <div className='container'>
      <div className='m-4'>
        <h1 className='orderTitle'>Mi pedido</h1>
      </div>
      <ListaProductosUsuario />
      <ResumenPedido />
    </div>
  );
};

export default Pedido;
