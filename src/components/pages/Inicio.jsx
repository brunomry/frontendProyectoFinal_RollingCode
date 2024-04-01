import { Button } from "react-bootstrap";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import CarruselCategorias from "./Inicio/CarruselCategorias";

const Inicio = () => {
  return (
    <>
      <section className="banner d-flex justify-content-center align-items-center">
        <div className="bannerOpacity"></div>
        <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-5 pb-md-5 text-white">
          <small className="fw-bold text-center bannerAddress mt-lg-2 mt-xl-0">
            <i className="fa-solid fa-location-dot fs-5"></i> General Paz 576,
            San Miguel de Tucumán, Tucumán
          </small>
          <div className="mt-3 mt-md-0">
            <p className="mb-0 fw-bold bannerSubtitle text-center">- Restaurante -</p>
            <h1 className="bannerTitle text-center">
              <i className="fa-solid fa-pizza-slice"></i> Ambiente Bohemio
            </h1>
          </div>
          <p className="fw-bold bannerDescription text-center">
            Te esperamos para una experiencia gastronómica inolvidable.
          </p>
          <Link className="text-center border border-3 border-white rounded-5 px-2 px-md-3 py-2 py-md-3 text-decoration-none text-white btnBanner fw-bold">
            CONOCE NUESTRO MENÚ
          </Link>
        </article>
      </section>
      <section className="categories d-flex flex-column justify-content-center align-items-center py-5">
        <h2 className="pb-3">- Nuestras Opciones -</h2>
        <CarruselCategorias></CarruselCategorias>
      </section>
     
    </>
  );
};

export default Inicio;
