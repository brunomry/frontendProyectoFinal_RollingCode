import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/horariosIndex.css";
import interior from "../../../assets/Inicio/interior.webp";

const HorariosYServicios = () => {
  return (
    <div className="container-fluid px-0 containerSchedules h-100 py-0 d-flex flex-column align-items-center flex-lg-row justify-content-center gap-5">
      <article className="textSize order-0 descriptionSchedules order-lg-2 text-center text-lg-start align-items-center h-100">
        <h2 className="mb-5 text-center">
          Disfruta de una buena comida en{" "}
          <span className="d-block">
            - <i className="fa-solid fa-pizza-slice fs-3"></i> Ambiente Bohemio
            -
          </span>
        </h2>
        <div className="d-flex flex-column align-items-center textSize">
          <h3 className="mb-2 border-2 rounded-5 px-4 text-center mx-auto">
            Horarios de Atención
          </h3>

          <p className="fw-normal">Lunes a Sábado de 12:00 a 00:00</p>
        </div>

        <div className="mt-4 text-center">
          <Button
            as={Link}
            variant="warning"
            to={"/menu"}
            className="btnMenu px-4 py-2 fw-normal"
          >
            <i className="fa-solid fa-utensils me-2"></i> ver Menú
          </Button>
        </div>
      </article>
      <article className="order-1 order-lg-1 containerImgInterior h-100">
        <img
          src={interior}
          alt="interior del restaurante"
          title="interior del restaurante"
          className="imgInterior"
        />
      </article>
    </div>
  );
};

export default HorariosYServicios;
