import React from 'react';
import { Button, Table } from 'react-bootstrap';
import ItemProductoUsuario from './ItemProductoUsuario';

const ListaProductosUsuario = () => {
  return (
    <div className='orderTable'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center align-middle'>Imagen</th>
            <th className='text-center align-middle'>Producto</th>
            <th className='text-center align-middle'>Precio</th>
            <th className='text-center align-middle'>Cantidad</th>
            <th className='text-center align-middle'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProductoUsuario />
          <ItemProductoUsuario />
          <ItemProductoUsuario />
        </tbody>
      </Table>
    </div>
  );
};

export default ListaProductosUsuario;
