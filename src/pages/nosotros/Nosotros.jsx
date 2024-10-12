import "./styles/nosotros.css";
import imgRestaurante from "../../assets/bannerNosotros.webp";
import img from "../../assets/imgLogin.webp";
import vision from "../../assets/vision.webp";

const Nosotros = () => {
  return (
    <section className="container w-100 py-5 text-white sectionTop">
      <div className="row">
        <div className="row  text-white pb-5">
          <div className="d-flex justify-content-center text-center flex-column col-md-6 px-2 px-lg-5">
            <h1>
              Bienvenidos a{" "}
              <span className="text-warning ">Ambiente Bohemio</span>
            </h1>
            <p>
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
          <div className="col-md-6 px-5 text-center d-flex flex-column justify-content-center">
            <h2 className="text-warning">Nuestra Visión</h2>
            <p>
              Ser el restaurante de referencia en la gastronomía local,
              reconocido por ofrecer una experiencia culinaria excepcional que
              combine tradición, innovación y calidad en cada plato, superando
              las expectativas de nuestros clientes.
            </p>
          </div>
        </article>
        <article className="row">
          
          <div className="col-md-6 px-5 text-center d-flex flex-column justify-content-center">
            <h2 className="text-warning">Nuestra Misión</h2>
            <p>
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

export default Nosotros;
