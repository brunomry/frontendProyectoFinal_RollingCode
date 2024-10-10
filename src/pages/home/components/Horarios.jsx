import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import interior from "../../../assets/Inicio/interior.webp";

const HorariosYServicios = () => {
  return (
    <article className="my-4 my-md-5 text-white d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-5 align-items-center">
      <h2 className="text-white text-center">
        Disfruta de una buena comida en{" "}
        <span className="d-block">
           Ambiente Bohemio
        </span>
      </h2>
      <div className="d-flex flex-column align-items-center ">
        <h3 className="mb-2 border-2 rounded-5 px-4 text-center mx-auto">
          Horarios de Atención
        </h3>

        <p className="fw-normal">Lunes a Sábado de 12:00 a 00:00</p>

        <div className="mt-2 mt-md-4 text-center">
          <Button
            as={Link}
            variant="warning"
            to={"/menu"}
            className="btnMenu px-4 py-2 fw-normal"
          >
            <i className="fa-solid fa-utensils me-2"></i> ver Menú
          </Button>
        </div>
      </div>
    </article>
  );
};

export default HorariosYServicios;
