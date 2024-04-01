import { Carousel, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HorariosYServicios = () => {
  return (
    <Row>
      <Col></Col>
      <Col>
        <article className="">
          <h2 className="mb-4">
            Disfruta de una buena comida en{" "}
            <span className="d-block">- Ambiente Bohemio -</span>
          </h2>
          <h3 className="mb-3">Horarios de Atención</h3>
          <p className="mb-1">
            <span className="fw-bold me-2">Lunes:</span>12:00 - 23:00
          </p>
          <p className="mb-1">
            <span className="fw-bold me-2">Martes:</span>12:00 - 23:00
          </p>
          <p className="mb-1">
            <span className="fw-bold me-2">Miércoles:</span>12:00 - 23:00
          </p>
          <p className="mb-1">
            <span className="fw-bold me-2">Jueves:</span>12:00 - 23:00
          </p>
          <p className="mb-1">
            <span className="fw-bold me-2">Viernes:</span>12:00 - 23:00
          </p>
          <p className="mb-1">
            <span className="fw-bold me-2">Sábado:</span>12:00 - 23:00
          </p>
          <Button as={Link} to={"/menu"} className="btnMenu mt-3 px-5">
            Ver Menú
          </Button>
        </article>
      </Col>
    </Row>
  );
};

export default HorariosYServicios;
