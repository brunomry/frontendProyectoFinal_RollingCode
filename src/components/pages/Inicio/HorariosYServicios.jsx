import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/horariosIndex.css";
import interior from "../../../assets/Inicio/interior.jpg";

const HorariosYServicios = () => {
  return (
    <div className="mx-2 containerSchedules d-flex flex-column align-items-center flex-lg-row justify-content-center gap-5">
      <article className="textSize order-0 order-lg-2 text-center text-lg-start">
        <h2 className="mb-4">
          Disfruta de una buena comida en{" "}
          <span className="d-block">
            - <i className="fa-solid fa-pizza-slice fs-3"></i> Ambiente Bohemio
            -
          </span>
        </h2>
        <h4 className="mb-3 border-2 rounded-5 px-4 border-bottom py-3 d-inline-block border-warning">
          Horarios de Atención
        </h4>
        <div className="d-flex flex-column align-items-center textSize align-items-lg-start">
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Lunes</span>
            <span>12:00 - 23:00</span>
          </div>
          <hr className="containerSchedule my-0" />
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Martes</span>12:00 - 23:00
          </div>
          <hr className="containerSchedule my-0" />
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Miércoles</span>12:00 - 23:00
          </div>
          <hr className="containerSchedule my-0" />
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Jueves</span>12:00 - 23:00
          </div>
          <hr className="containerSchedule my-0" />
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Viernes</span>12:00 - 23:00
          </div>
          <hr className="containerSchedule my-0" />
          <div className="mb-1 d-flex justify-content-between containerSchedule">
            <span className="fw-medium me-2">Sábado</span>12:00 - 23:00
          </div>
          <hr className="containerSchedule my-0" />
        </div>

        <div className="mt-4">
          <Button
            as={Link}
            variant="warning"
            to={"/menu"}
            className="btnMenu px-4 py-2 border border-1 border-dark fw-bold fs-5"
          >
            <i className="fa-solid fa-utensils me-2"></i> ver Menú
          </Button>
        </div>
      </article>
      <article className="order-1 order-lg-1">
        <img
          src={interior}
          alt="interior del restaurante"
          className="imgInterior rounded-2 shadow"
        />
      </article>
    </div>
  );
};

export default HorariosYServicios;
