import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import leonel from "../../../assets/nosotros/leonelRodrigoCordero.jpg";
import bruno from "../../../assets/nosotros/brunoMadozzoRomay.jpg";
import fernando from "../../../assets/nosotros/fernandoHerrera.jpg";
import elias from "../../../assets/nosotros/eliasJavierJuarez.jpg";


const CarruselNosotros = () => {
  return (
    <Carousel interval={3000} indicators={false}>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
        <div className="col-12 col-sm-6 p-0 p-4 ">
              <div className="d-flex flex-column align-items-center p-3 cardCustom">
                <div className="imgContainer">
                  <img
                    className="img-fluid imgProfileP h-100"
                    src={leonel}
                    alt="Leonel Cordero"
                    title="Leonel Cordero"
                  />
                </div>
                <div>
                  <h3 className="py-3">Leonel Cordero</h3>
                </div>
                <div className="linkContainer">
                  <a href="https://www.linkedin.com/in/leonelrc22/" className="mx-2" target="blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/LeonelRC23" className="mx-2" target="blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
        <div className="col-12 col-sm-6 p-0 p-4 ">
              <div className="d-flex flex-column align-items-center p-3 cardCustom">
                <div className="imgContainer">
                  <img
                    className="img-fluid imgProfileP h-100"
                    src={bruno}
                    alt="Bruno Madozzo"
                    title="Bruno Madozzo"
                  />
                </div>
                <div>
                  <h3 className="py-3">Bruno Madozzo</h3>
                </div>
                <div className="linkContainer">
                  <a href="https://www.linkedin.com/in/bruno-madozzo/" className="mx-2" target="blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/brunomry" className="mx-2" target="blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
        <div className="col-12 col-sm-6 p-0 p-4 ">
              <div className="d-flex flex-column align-items-center p-3 cardCustom">
                <div className="imgContainer">
                  <img
                    className="img-fluid imgProfileP h-100"
                    src={fernando}
                    alt="Fernando Herrera"
                    title="Fernando Herrera"
                  />
                </div>
                <div>
                  <h3 className="py-3">Fernando Herrera</h3>
                </div>
                <div className="linkContainer">
                  <a href="https://www.linkedin.com/in/fernando-herrera-a023992bb/" className="mx-2" target="blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/HerreFer" className="mx-2" target="blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className='d-flex justify-content-center'>
        <div className="col-12 col-sm-6 p-0 p-4 ">
              <div className="d-flex flex-column align-items-center p-3 cardCustom">
                <div className="imgContainer">
                  <img
                    className="img-fluid imgProfileP h-100"
                    src={elias}
                    alt="Elias Juarez"
                    title="Elias Juarez"
                  />
                </div>
                <div>
                  <h3 className="py-3">Elias Juarez</h3>
                </div>
                <div className="linkContainer">
                  <a href="https://www.linkedin.com/in/elias-juarez-49825b237/" className="mx-2" target="blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Elias-Juarez" className="mx-2" target="blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </CarouselItem>
    </Carousel>
  );
};

export default CarruselNosotros;
