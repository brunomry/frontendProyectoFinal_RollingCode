import "../../styles/contacto.css";

const Contacto = () => {
  return (
    <section className="bannerContact d-flex justify-content-center align-items-center sectionTop">
      <div className="bannerOpacity"></div>
      <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 pb-md-5 text-white">
        <div className="mt-3 mt-md-0">
        <p className="mb-0 fw-bold bannerSubtitle text-center">Contáctanos</p>
        <h1 className="bannerTitle text-center">¿Donde estamos?</h1>
        </div>
      </article>
    </section>
  );
};

export default Contacto;
