import { Link } from "react-router-dom";
import "../styles/bannerIndex.css";

const BannerHome = () => {
  return (
    <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 text-white">
      <small className="fw-normal text-center bannerAddress ">
        <i className="fa-solid fa-location-dot"></i> General Paz 576, San Miguel
        de Tucumán, Tucumán
      </small>
      <div className=" mt-md-0">
        <p className="mb-0 fw-normal bannerSubtitle text-center">
          Restaurante
        </p>
        <h1 className="text-white text-center">
          Ambiente Bohemio
        </h1>
      </div>
      <p className="fw-normal bannerDescription text-center mb-0">
        Te esperamos para una experiencia gastronómica inolvidable.
      </p>
      <Link
        className="text-center border border-1 border-white rounded-5 px-2 px-md-4 py-2 py-md-3 text-decoration-none text-white btnBanner fw-normal"
        to={"/menu"}
      >
        CONOCE NUESTRA CARTA
      </Link>
    </article>
  );
};

export default BannerHome;
