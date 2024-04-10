import React from 'react';
import { Button, Table } from 'react-bootstrap';
import ItemProductoUsuario from './ItemProductoUsuario';

const ListaProductosUsuario = ({
  carrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
}) => {
  return (
    <div className='orderTable'>
      <Table responsive hover>
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
          {carrito.map((productoCarrito) => (
            <ItemProductoUsuario
              key={productoCarrito.id}
              productoCarrito={productoCarrito}
              agregarCantidadProducto={agregarCantidadProducto}
              quitarCantidadProducto={quitarCantidadProducto}
              quitarProductoCarrito={quitarProductoCarrito}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaProductosUsuario;
