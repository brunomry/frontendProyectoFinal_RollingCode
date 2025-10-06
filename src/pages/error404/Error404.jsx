import "./error404.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconExclamation from "../../common/icons/IconExclamation";

const Error404 = () => {
  return (
    <section className="containerError404 d-flex justify-content-center px-2 sectionTop mb-5">
      <div className="d-flex flex-column px-5 rounded-5 justify-content-center gap-2">
        <div className="text-center d-flex flex-column align-items-center">
          <IconExclamation></IconExclamation>
        </div>
        <h1 className="m-0 m-2 text-center fw-bold">
          Ocurrió un error inesperado
        </h1>
        <p className="text-center fs-4 fw-bold">Página no encontrada.</p>
        <div className="text-center mx-3 pb-2">
          <Button
            variant="secondary"
            className="p-2 mt-3 fs-6 px-5 rounded-5"
            as={Link}
            to="/"
          >
            Volver
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
