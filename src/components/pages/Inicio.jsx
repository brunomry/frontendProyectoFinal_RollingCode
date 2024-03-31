import { Button } from "react-bootstrap";
import "../../styles/index.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <section className="banner">
        <div className="bannerOpacity"></div>
        <article className="bannerContent pb-md-5">
          <small className="fw-bold text-center"><i class="fa-solid fa-location-dot"></i> General Paz 576, San Miguel de Tucumán, Tucumán</small>
          <div>
            <p className="address fs-5 fw-bold">- Restaurante -</p>
            <h1 className="display-2">Ambiente Bohemio</h1>
          </div>
          <p className="fs-5 fw-bold">Te esperamos para una experiencia gastronómica inolvidable.</p>
          <Link className="border border-3 border-white rounded-5 px-2 px-md-3 py-3 text-decoration-none text-white btnBanner fw-bold fs-5">
            CONOCE NUESTRO MENÚ
          </Link>
        </article>
      </section>
    </>
  );
};

export default Inicio;
