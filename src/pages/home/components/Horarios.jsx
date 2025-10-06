import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconUtensils from "../../../common/icons/IconUtensils";

const HorariosYServicios = () => {
  return (
    <section className="container-fluid schedules px-0">
      <article className=" px-5 d-flex flex-column flex-md-row justify-content-center horarios">
        <div>
          <h2 className="fw-bold">
            Más de 10 años siendo referentes en el rubro gastronómico.
          </h2>
          <h3 className="fw-bold ">Disfruta de una buena comida en Ambiente Bohemio</h3>
        </div>

        <div className="d-flex flex-column align-items-center ">
          <h3 className="mb-4 border-2 rounded-5 px-4 text-center mx-auto fw-bold">
            Horarios de Atención
          </h3>
          <p className="fw-normal">Lunes a Sábado de 12:00 a 00:00</p>
          <div className="mt-2 mt-md-4 text-center">
            <Button
              as={Link}
              variant="warning"
              to={"/menu"}
              className="btnMenu px-5 py-3 fw-normal rounded-5"
            >
              <IconUtensils /> Menú
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HorariosYServicios;
