import React, { useState } from 'react';

const CardNosotros = () => {
  return (
    <div className='col-12 col-sm-6 p-0 p-4 '>
      <div className='d-flex flex-column align-items-center p-3 cardCustom'>
        <div className='imgContainer'>
          <img
            className='img-fluid imgProfileP'
            src='https://i.pinimg.com/564x/94/65/ee/9465ee0fafba25f4051b4de0fd1210d7.jpg'
            alt=''
          />
        </div>
        <div>
          <h3 className='py-3'>Leonel Cordero</h3>
        </div>
        <div className='linkContainer'>
          <a href='' className='mx-2'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='' className='mx-2'>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNosotros;
