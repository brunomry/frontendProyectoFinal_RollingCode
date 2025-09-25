import imgRestaurante from "../../assets/images/bannerNosotros.webp";
import img from "../../assets/images/imgLogin.webp";
import vision from "../../assets/images/vision.webp";

const AboutUs = () => {
  return (
    <section className="container w-100 py-5 mt-5 sectionTop">
      <div className="row">
        <div className="row pb-5">
          <div className="d-flex justify-content-center flex-column col-md-6 px-2 px-lg-5 gap-3">
            <h1>
              Bienvenidos a{" "}
              <span className="text-warning ">Ambiente Bohemio</span>
            </h1>
            <p className="text-secondary">
              Ambiente Bohemio surgió para brindar experiencias gastronómicas
              excepcionales. Nuestra pasión por la gastronomía se refleja en
              cada plato que servimos. Nuestro equipo está comprometido en
              ofrecer un servicio de alta calidad. Descubre un lugar donde la
              comida y la atmósfera se fusionan para crear momentos
              inolvidables!
            </p>
          </div>
          <div className="col-md-6">
            <img src={imgRestaurante} alt="" className="img-fluid" />
          </div>
        </div>
        <article className="row mb-5">
          <div className="col-md-6 order-1 order-md-0">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 px-5 d-flex flex-column justify-content-center gap-3">
            <h2 className="text-warning">Nuestra Visión</h2>
            <p className="text-secondary">
              Ser el restaurante de referencia en la gastronomía local,
              reconocido por ofrecer una experiencia culinaria excepcional que
              combine tradición, innovación y calidad en cada plato, superando
              las expectativas de nuestros clientes.
            </p>
          </div>
        </article>
        <article className="row">
          
          <div className="col-md-6 px-5  d-flex flex-column justify-content-center gap-3">
            <h2 className="text-warning">Nuestra Misión</h2>
            <p className="text-secondary">
              Ofrecer a nuestros comensales una experiencia gastronómica única,
              basada en ingredientes frescos y de alta calidad, con un servicio
              amable y atento, en un ambiente acogedor donde cada detalle está
              pensado para crear momentos memorables.
            </p>
          </div>
          <div className="col-md-6">
            <img src={vision} alt="" className="img-fluid"/>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
