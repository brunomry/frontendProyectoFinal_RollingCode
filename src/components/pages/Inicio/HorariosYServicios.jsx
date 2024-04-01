import { Carousel, Card, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/horariosYserviciosIndex.css";

const HorariosYServicios = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <article className="textSize">
            <h2 className="mb-4">
              Disfruta de una buena comida en{" "}
              <span className="d-block">
                - <i className="fa-solid fa-pizza-slice fs-3"></i> Ambiente
                Bohemio -
              </span>
            </h2>
            <h4 className="mb-3 border-2 rounded-5 px-4 border-bottom py-3 d-inline-block border-warning">
              Horarios de Atención
            </h4>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Lunes</span>
              <span>12:00 - 23:00</span>
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Martes</span>12:00 - 23:00
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Miércoles</span>12:00 - 23:00
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Jueves</span>12:00 - 23:00
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Viernes</span>12:00 - 23:00
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mb-1 d-flex justify-content-between containerSchedule">
              <span className="fw-medium me-2">Sábado</span>12:00 - 23:00
            </div>
            <hr class="containerSchedule my-0"/>
            <div className="mt-3">
              <Button
                as={Link}
                variant="warning"
                to={"/menu"}
                className="btnMenu px-4 py-2 border border-1 border-dark fw-bold fs-5 shadow"
              >
               <i class="fa-solid fa-utensils me-2"></i> ver Menú
              </Button>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default HorariosYServicios;
