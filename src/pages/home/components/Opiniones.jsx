import "../styles/opinionesIndex.css";
import { opiniones } from "../../../helpers/opiniones";
import CardOpinion from "./CardOpinion";

const Opiniones = () => {
  return (
    <article className="containerCardOpinions d-flex justify-content-md-center gap-2 gap-lg-4 flex-md-wrap px-2">
      {opiniones.map((opinion) => (
        <CardOpinion key={opinion.id} opinion={opinion}></CardOpinion>
      ))}
    </article>
  );
};

export default Opiniones;
