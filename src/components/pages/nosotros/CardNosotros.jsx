import React, { useState } from 'react';

const CardNosotros = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsChange = () => setShowDetails(!showDetails);
  return (
    <div className='col-12 col-sm-6 p-0 p-4 cardCustom'>
      <div className='d-flex flex-column align-items-center p-3'>
        <div className='imgContainer'>
          {showDetails && (
            <div
              className='d-flex flex-column align-items-center justify-content-center'
              onClick={detailsChange}
            >
              <a className='my-1' href=''>
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a className='my-1' href=''>
                <i className='fa-brands fa-square-github'></i>
              </a>
            </div>
          )}
          <img
            onClick={detailsChange}
            className='img-fluid imgProfileP'
            src='https://i.pinimg.com/564x/94/65/ee/9465ee0fafba25f4051b4de0fd1210d7.jpg'
            alt=''
          />
        </div>
        <div>
          <p>Leonel Cordero</p>
        </div>
      </div>
    </div>
  );
};

export default CardNosotros;
