import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'react-bootstrap';

const ResumenPedido = ({ montoCarrito }) => {
  return (
    <div className='resumeCardContainer'>
      <div className='resumeCard my-5'>
        <Card className='text-dark'>
          <CardHeader>
            <CardTitle className='mt-2 fw-bold'>Detalles del pedido</CardTitle>
          </CardHeader>
          <CardBody>
            <div className='my-2 d-flex'>
              <input
                type='radio'
                id='delivery'
                name='grup'
                className='mx-2'
                defaultChecked
              />
              <label htmlFor='delivery'>{'Delivery (Gratis)'}</label>
            </div>
            <div className='d-flex'>
              <input type='radio' id='local' name='grup' className='mx-2' />
              <label htmlFor='local'>{'Retiro en el local'}</label>
            </div>
            <div className='d-flex justify-content-between mt-3 fw-bold'>
              <span>Total</span>
              <span>${montoCarrito}</span>
            </div>
            <hr className='mt-0' />
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-center'>
              <Button className='w-100 fw-bold' variant='success'>
                Confirmar Pedido
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResumenPedido;
