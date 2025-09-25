import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HorariosYServicios = () => {
  return (
    <section className="container-fluid schedules px-0">
      <article className=" d-flex flex-column flex-md-row justify-content-center horarios align-items-center">
        <h2 className=" text-center">
          Disfruta de una buena comida en{" "}
          <span className="d-block">Ambiente Bohemio</span>
        </h2>
        <div className="d-flex flex-column align-items-center ">
          <h3 className="mb-4 border-2 rounded-5 px-4 text-center mx-auto">
            Horarios de Atención
          </h3>
          <p className="fw-normal">Lunes a Sábado de 12:00 a 00:00</p>
          <div className="mt-2 mt-md-4 text-center">
            <Button
              as={Link}
              variant="warning"
              to={"/menu"}
              className="btnMenu px-5 fw-bold py-2 fw-normal"
            >
              <i className="fa-solid fa-utensils me-2"></i> Menú
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HorariosYServicios;
