import "../styles/opinionesIndex.css";
import { opiniones } from "@/helpers/opiniones";
import CardOpinion from "./CardOpinion";

const Opiniones = () => {
  return (
    <section className="opinions py-4 py-sm-5">
      <div className="container-fluid containerOpinions d-flex flex-column align-items-center gap-md-5">
        <h2 className="mb-4">Algunas reseñas de nuestros clientes:</h2>
        <article className="containerCardOpinions d-flex justify-content-md-center gap-2 gap-lg-4 flex-md-wrap px-2">
          {opiniones.map((opinion) => (
            <CardOpinion key={opinion.id} opinion={opinion}></CardOpinion>
          ))}
        </article>
        <a href="https://www.google.com.ar" target="_blank" className="mt-3">
          Ver todas las reseñas
        </a>
      </div>
    </section>
  );
};

export default Opiniones;
