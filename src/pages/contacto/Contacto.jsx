import { Link } from "react-router-dom";
import "./styles/contacto.css";

const Contacto = () => {
  return (
    <section className="container py-5 sectionTop">
      <div className="row justify-content-center gap-2 py-xl-5 text-dark bg-secondary rounded-5">
        <article className="col-lg-5 ">
          <div className="text-white py-lg-5">
            <p className="mb-0 fw-bold bannerSubtitle text-center">
              Contáctanos
            </p>
            <h1 className="bannerTitle text-center mb-xl-4">¿Dónde estamos?</h1>
            <div className="mt-3 w-100 d-flex flex-column align-items-center my-lg-4 gap-3 gap-md-2 text-center">
              <p className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-location-dot fs-4 me-2 "></i>
                <span>General Paz 576, San Miguel de Tucumán, Tucumán</span>
              </p>
              <div
                title="WhatsApp"
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle">
                  <i className="fa-brands fa-whatsapp fa-2xl link-success"></i>{" "}
                </div>

                <span>Tel: 1231234567</span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center mb-5 ">
              <p className="text-center">
                Síguenos en nuestras redes sociales:
              </p>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Link
                  to="*"
                  target="_blank"
                  title="facebook"
                  className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
                >
                  <i className="fa-brands fa-facebook-f fa-2xl link-primary"></i>
                </Link>
                <Link
                  to="*"
                  target="_blank"
                  title="instagram"
                  className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
                >
                  <i className="fa-brands fa-instagram fa-2xl  link-danger"></i>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <article className="col-lg-6 d-lg-flex justify-content-lg-start ">
          <div className="mb-4 w-100">
            <div className="containerMap d-flex align-items-center justify-content-center">
              <iframe
                className="rounded-3"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gral.%20Paz%20576,%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n,%20Tucum%C3%A1n+(Ambiente%20Bohemio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contacto;
