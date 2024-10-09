import "../styles/opinionesIndex.css";
import { Card } from "react-bootstrap";
import google from "../../../assets/Inicio/google.png";

const CardOpinion = ({ opinion }) => {

  const verOpinionEnGoogle = () => {
    window.open("https://www.google.com.ar", "_blank")
  }

  return (
    <Card className="border p-3 cardReview d-flex flex-column gap-3" onClick={()=>verOpinionEnGoogle()} title="Clic para ver reseña en Google">
      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex gap-3">
          <img
            src={opinion.imagenUsuario}
            alt="imagen"
            className="imgUser rounded-circle"
          />
          <div>
            <p className="fw-normal text-white mb-0">{opinion.nombre}</p>
            <span className="text-secondary">{opinion.fecha}</span>
          </div>
        </div>
        <div>
          <img
            src={google}
            alt="icono de google"
            title="icono de google"
            className="iconGoogle"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between flex-column gap-2 flex-sm-row">
        <p className="d-flex gap-1 mb-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star iconStar ${
                index < opinion.estrellas ? "text-warning" : "text-secondary"
              }`}
            ></i>
          ))}
        </p>
      </div>
      <p className="textSize fw-normal text-white">{opinion.comentario}</p>
    </Card>
  );
};

export default CardOpinion;
