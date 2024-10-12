import pdf from "../../assets/Menú_Ambiente_Bohemio.pdf";
import Horarios from "./components/Horarios";
import Opiniones from "./components/Opiniones";
import "./styles/menuIndex.css";
import BannerHome from "./components/BannerHome";

const Inicio = () => {
  const handleDownloadPDF = () => {
    const urlPDF = pdf;
    window.open(urlPDF, "_blank");
  };

  return (
    <>
      <section className="banner d-flex justify-content-center align-items-center sectionTop">
        <BannerHome></BannerHome>
      </section>
      <section className="container-fluid schedules px-0">
        <Horarios></Horarios>
      </section>
      <section className="opinions py-4 py-sm-5">
        <div className="container-fluid containerOpinions d-flex flex-column align-items-center gap-md-3">
          <h2 className="mb-4">Algunas reseñas de nuestros clientes:</h2>
          <Opiniones></Opiniones>
          <a href="https://www.google.com.ar" target="_blank" className="mt-3">
            Ver todas las reseñas
          </a>
        </div>
      </section>
      <section className="bannerMenu d-flex flex-column py-3 justify-content-center align-items-center">
        <h1 className="title pb-3">Nuestra Carta</h1>
        <p className="fw-normal bannerText text-center pb-md-3">
          ¡Descarga nuestra carta y conoce todo lo que ofrecemos!
        </p>
        <button
          className="bannerBTN text-center border border-1 text-white py-3 text-decoration-none "
          onClick={handleDownloadPDF}
        >
          Descargar Menú
        </button>
      </section>
    </>
  );
};

export default Inicio;
