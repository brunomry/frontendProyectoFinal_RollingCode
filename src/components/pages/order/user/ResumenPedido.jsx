import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap';

const ResumenPedido = () => {
  return (
    <div className='resumeCardContainer'>
      <div className='resumeCard my-5'>
        <Card>
          <CardBody>
            <CardTitle className='mt-2'>Detalles del pedido</CardTitle>
            <div className='my-2'>
              <input type='radio' id='delivery' name='grup' className='mx-2' />
              <label htmlFor='delivery'>{'Delivery (Gratis)'}</label>
            </div>
            <div>
              <input type='radio' id='local' name='grup' className='mx-2' />
              <label htmlFor='local'>{'Retiro en el local'}</label>
            </div>
            <div className='d-flex justify-content-between mt-3'>
              <div>
                <p>Total</p>
              </div>
              <div>$4500</div>
            </div>
            <div className='d-flex justify-content-center'>
              <Button variant='success'>Confirmar pedido</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ResumenPedido;
