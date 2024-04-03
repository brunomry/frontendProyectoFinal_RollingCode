import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'react-bootstrap';

const ResumenPedido = () => {
  return (
    <div className='resumeCardContainer'>
      <div className='resumeCard my-5'>
        <Card>
          <CardHeader>
            <CardTitle className='mt-2 text-white fw-bold'>
              Detalles del pedido
            </CardTitle>
          </CardHeader>
          <CardBody className='text-white'>
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
            <div className='d-flex justify-content-between mt-3 text-white fw-bold'>
              <span>Total</span>
              <span>$4500</span>
            </div>
            <hr className='mt-0' />
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-center'>
              <Button className='w-100 fw-bold' variant='success'>
                Confirmar pedido
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResumenPedido;
