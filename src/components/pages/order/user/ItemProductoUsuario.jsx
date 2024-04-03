import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemProductoUsuario = () => {
  return (
    <tr>
      <td className='text-center align-middle'>
        <img
          className='img-order p-2'
          title='Comida dinamica'
          src='https://images.pexels.com/photos/17750147/pexels-photo-17750147/free-photo-of-comida-fresco-vista-superior-fotografia-de-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='comida.jpg'
        />
      </td>
      <td className='text-center align-middle'>Guiso de fideos moñito</td>
      <td className='text-center align-middle'>$1500</td>
      <td className='text-center align-middle quantityProductos'>
        <Button className='mx-3 mx-sm-3' variant='secondary'>
          -
        </Button>
        {1}
        <Button className='mx-3 mx-sm-3' variant='secondary'>
          +
        </Button>
      </td>
      <td className='text-center align-middle'>
        <Button variant='danger' title='Eliminar producto'>
          <i className='fa-solid fa-trash'></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProductoUsuario;
