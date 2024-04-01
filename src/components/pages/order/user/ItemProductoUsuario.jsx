import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemProductoUsuario = () => {
  const [productCount, setProductCount] = useState(1);
  const sumCount = () => {
    setProductCount(productCount + 1);
  };
  const resCount = () => {
    setProductCount(productCount - 1);
    if (productCount === 1) {
      alert('La cantidad minima de un minimo producto no puede ser 0.');
      setProductCount(1);
    }
  };
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
        <Button className='mx-3 mx-sm-3' variant='secondary' onClick={resCount}>
          -
        </Button>
        {productCount}
        <Button className='mx-3 mx-sm-3' variant='secondary' onClick={sumCount}>
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
