import "./styles/index.css";
import { Link } from "react-router-dom";
import pdf from '../../assets/Menú_Ambiente_Bohemio.pdf';
import Horarios from "./components/Horarios";
import Opiniones from "./components/Opiniones";

const Inicio = () => {

  const handleDownloadPDF = () => {
    const urlPDF = pdf;
    window.open(urlPDF, '_blank');
  };

  return (
    <>
      <section className="banner d-flex justify-content-center align-items-center pb-5 sectionTop">
        <div className="bannerOpacity"></div>
        <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 pb-md-5 text-white">
          <small className="fw-normal text-center bannerAddress mt-2 ">
            <i className="fa-solid fa-location-dot"></i> General Paz 576,
            San Miguel de Tucumán, Tucumán
          </small>
          <div className=" mt-md-0">
            <p className="mb-0 fw-normal bannerSubtitle text-center">
              - Restaurante -
            </p>
            <h1 className="text-white text-center">
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
      <section className="container-fluid schedules px-0">
        <Horarios></Horarios>
      </section>
      <section className="opinions">
        <div className="container-fluid containerOpinions py-4 py-sm-5 d-flex flex-column align-items-center gap-3">
          <h2 className="mb-4">- Opiniones -</h2>
          <Opiniones></Opiniones>
        </div>
      </section>
          <section className='bannerMenu d-flex flex-column justify-content-center align-items-center sectionTop'>
        <h1 className='title pb-3'>Nuestro Menú</h1>
        <p className='fw-normal bannerText pb-3'>
          ¡Descubre nuestro festín de sabores!
        </p>
        <button
          className='bannerBTN text-center py-3 text-decoration-none '
          onClick={handleDownloadPDF}
        >
          DESCARGAR MENÚ
        </button>
      </section>
    </>
  );
};

export default Inicio;
