import React from "react";
import "../../styles/nosotros.css";
import CarruselNosotros from "./nosotros/CarruselNosotros";
import leonel from "../../assets/nosotros/leonelRodrigoCordero.webp";
import bruno from "../../assets/nosotros/brunoMadozzoRomay.webp";
import fernando from "../../assets/nosotros/fernandoHerrera.webp";
import elias from "../../assets/nosotros/eliasJavierJuarez.webp";

const Nosotros = () => {
  return (
    <>
      <section className="d-flex flex-column align-items-center justify-content-center mx-auto bannerContainer sectionTop">
        <div className="bannerOpacity"> </div>
        <div className="d-flex flex-column align-items-center justify-content-center bannerContent">
          <h1>Ambiente Bohemio</h1>
          <p className="w-100 text-center">
            Ambiente Bohemio surgió para brindar experiencias gastronómicas
            excepcionales. Nuestra pasión por la gastronomía se refleja en cada
            plato que servimos. Nuestro equipo está comprometido en ofrecer un
            servicio de alta calidad. Descubre un lugar donde la comida y la
            atmósfera se fusionan para crear momentos inolvidables!
          </p>
        </div>
      </section>
      <section className="team">
        <h2 className="text-center m-0 mt-4 fw-bold">- Nuestro equipo -</h2>
        <article className="cardsContainer d-none d-md-block">
          <div className="row m-0">
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
        </article>
        <div className="carouselSM">
          <CarruselNosotros />
        </div>
      </section>
    </>
  );
};

export default Nosotros;
