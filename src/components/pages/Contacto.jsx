import "../../styles/contacto.css";

const Contacto = () => {
  return (
    <>
      <section className="bannerContact d-flex justify-content-center align-items-center sectionTop">
        <div className="bannerOpacity"></div>
        <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 pb-md-5 text-white">
          <div className="mt-3 mt-md-0">
            <p className="mb-0 fw-bold bannerSubtitle text-center">
              Contáctanos
            </p>
            <h1 className="bannerTitle text-center">¿Donde estamos?</h1>
          </div>
        </article>
      </section>
      <section>
        <div className="w-100 d-flex flex-column align-items-center my-4 gap-3 gap-md-2 text-center">
            <p>
              <i className="fa-solid fa-location-dot fs-5"></i>
              General Paz 576, San Miguel de Tucumán, Tucumán
            </p>
            <p title="WhatsApp">
              <i className="fa-brands fa-whatsapp fa-2xl link-success"></i>{" "}
              123-1234567
            </p>
        </div>
      </section>
    </>
  );
};

export default Contacto;
