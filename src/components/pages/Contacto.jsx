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
        <article>
          <div className="mb-4">
            <div className="containerMap w-100 d-flex align-items-center justify-content-center">
              <iframe
              className="rounded-3"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gral.%20Paz%20576,%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n,%20Tucum%C3%A1n+(Ambiente%20Bohemio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contacto;
