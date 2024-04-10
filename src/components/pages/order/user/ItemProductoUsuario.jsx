import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemProductoUsuario = ({
  productoCarrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
}) => {
  console.log(productoCarrito);
  return (
    <tr>
      <td className='text-center align-middle'>
        <img
          className='img-order p-2'
          title={productoCarrito.producto.nombre}
          src={productoCarrito.producto.imagen}
          alt='comida.jpg'
        />
      </td>
      <td className='text-center align-middle'>
        {productoCarrito.producto.nombre}
      </td>
      <td className='text-center align-middle'>
        ${productoCarrito.producto.precio}
      </td>
      <td className='text-center align-middle quantityProductos'>
        <Button
          className='mx-3 mx-sm-3'
          variant='secondary'
          onClick={() => quitarCantidadProducto(productoCarrito.id)}
        >
          -
        </Button>
        {productoCarrito.cantidad}
        <Button
          className='mx-3 mx-sm-3'
          variant='secondary'
          onClick={() => agregarCantidadProducto(productoCarrito.id)}
        >
          +
        </Button>
      </td>
      <td className='text-center align-middle'>
        <Button
          variant='danger'
          title='Eliminar producto'
          onClick={() => quitarProductoCarrito(productoCarrito.id)}
        >
          <i className='fa-solid fa-trash'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProductoUsuario;
