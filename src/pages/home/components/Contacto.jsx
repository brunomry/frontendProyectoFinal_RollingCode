import { Link } from "react-router-dom";
import "../styles/contacto.css";
import IconInstagram from "../../../common/icons/IconInstagram";
import IconFacebook from "../../../common/icons/IconFacebook";
import IconWpp from "../../../common/icons/IconWpp";
import IconLocation from "../../../common/icons/IconLocation";

const Contacto = () => {
  return (
      <section className="container py-5 sectionTop">
            <div className="row justify-content-center gap-5 py-xl-5 text-dark rounded-5">
              <article className="col-lg-5 ">
                <div className=" py-lg-5">
                  <p className="mb-0 bannerSubtitle">
                    Visítanos
                  </p>
                  <h1 className="bannerTitle mb-xl-5">¿Dónde estamos?</h1>
                  <div className="mt-3 w-100 d-flex flex-column my-lg-4 gap-3 gap-md-2">
                    <p className="d-flex align-items-center gap-2">
                      <IconLocation></IconLocation>
                      <span className="text-secondary">General Paz 576, San Miguel de Tucumán, Tucumán</span>
                    </p>
                    <div
                      title="WhatsApp"
                      className="d-flex align-items-center gap-2"
                    >
                      <div className="d-flex justify-content-center bg-white align-items-center rounded-circle">
                        <IconWpp></IconWpp>
                      </div>
                      <span className="text-secondary">1231234567</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center mt-5 ">
                    <p className="text-secondary">
                      Síguenos en nuestras redes sociales:
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <Link
                        to="*"
                        target="_blank"
                        title="facebook"
                        className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
                      >
                        <IconFacebook></IconFacebook>
                      </Link>
                      <Link
                        to="*"
                        target="_blank"
                        title="instagram"
                        className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
                      >
                        <IconInstagram></IconInstagram>
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
  )
}

export default Contacto;