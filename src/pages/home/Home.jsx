import pdf from "@/assets/Menú_Ambiente_Bohemio.pdf";
import Horarios from "./components/Horarios";
import Opiniones from "./components/Opiniones";
import "./styles/menuIndex.css";
import BannerHome from "./components/BannerHome";
import Contacto from "./components/Contacto";

const Home = () => {
  const handleDownloadPDF = () => {
    const urlPDF = pdf;
    window.open(urlPDF, "_blank");
  };

  return (
    <div className="d-flex flex-column home">
      <BannerHome></BannerHome>
      <Horarios></Horarios>
      <Opiniones></Opiniones>
      <section className="bannerMenu d-flex flex-column py-5 justify-content-center align-items-center gap-4">
        <p className="fw-bold text-center fs-2">
          Descarga nuestra Carta y conoce todo lo que tenemos para ofrecerte
        </p>
        <button
          className="px-5 py-3 bg-dark rounded-3 text-white text-center border border-1 text-decoration-none "
          onClick={handleDownloadPDF}
        >
          Descargar Menú
        </button>
      </section>
        <Contacto></Contacto>
    </div>
  );
};

export default Home;
