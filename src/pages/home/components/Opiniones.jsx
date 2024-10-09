import "../styles/opinionesIndex.css";
import { opiniones } from "../../../helpers/opiniones";
import CardOpinion from "./CardOpinion";

const Opiniones = () => {
  return (
    <article className="containerCardOpinions w-100 d-flex justify-content-center gap-4 flex-wrap px-2">
      {opiniones.map((opinion) => (
        <CardOpinion key={opinion.id} opinion={opinion}></CardOpinion>
      ))}
    </article>
  );
};

export default Opiniones;
