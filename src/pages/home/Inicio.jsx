import "./styles/index.css";
import { Link } from "react-router-dom";
import CarruselCategorias from "./components/CarruselCategorias";
import Horarios from "./components/Horarios";
import Opiniones from "./components/Opiniones";

const Inicio = () => {
  return (
    <>
      <section className="banner d-flex justify-content-center align-items-center sectionTop">
        <div className="bannerOpacity"></div>
        <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 pb-md-5 text-white">
          <small className="fw-normal text-center bannerAddress mt-2 mt-lg-2">
            <i className="fa-solid fa-location-dot fs-5"></i> General Paz 576,
            San Miguel de Tucumán, Tucumán
          </small>
          <div className="mt-3 mt-md-0">
            <p className="mb-0 fw-normal bannerSubtitle text-center">
              - Restaurante -
            </p>
            <h1 className="bannerTitle text-center">
              <i className="fa-solid fa-pizza-slice"></i> Ambiente Bohemio
            </h1>
          </div>
          <p className="fw-normal bannerDescription text-center mb-0">
            Te esperamos para una experiencia gastronómica inolvidable.
          </p>
          <Link
            className="text-center border border-3 border-white rounded-5 px-2 px-md-3 py-2 py-md-3 text-decoration-none text-white btnBanner fw-normal"
            to={"/menu"}
          >
            CONOCE NUESTRO MENÚ
          </Link>
        </article>
      </section>
      <section className="categories d-flex flex-column justify-content-center align-items-center py-4 py-sm-5">
        <h2 className="pb-3">- Nuestras Opciones -</h2>
        <CarruselCategorias></CarruselCategorias>
      </section>
      <section className="container-fluid schedules px-0">
        <Horarios></Horarios>
      </section>
      <section className="opinions">
        <div className="container-fluid containerOpinions py-4 py-sm-5 d-flex flex-column align-items-center gap-3">
          <h2 className="mb-4">- Opiniones -</h2>
          <Opiniones></Opiniones>
        </div>
      </section>
    </>
  );
};

export default Inicio;
