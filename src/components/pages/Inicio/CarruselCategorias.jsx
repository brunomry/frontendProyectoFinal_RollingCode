import { Carousel, Card, Row, Col } from "react-bootstrap";
import pizzas from "../../../assets/Inicio/pizzas.webp";
import pastas from "../../../assets/Inicio/pastas(1).webp";
import empanadas from "../../../assets/Inicio/empanadas.webp";
import hamburguesas from "../../../assets/Inicio/hamburguesas.webp";
import "../../../styles/categoriasIndex.css";

const CarruselCategorias = () => {
  return (
    <>
      <Carousel slide={false} className="d-md-none">
        <Carousel.Item interval={2000}>
          <Card className="cardCategory border-0 mx-0">
            <Card.Img
              variant="top"
              src={pizzas}
              className="imgCategory"
              alt="opción de pizza"
              title="opción de pizzas"
            />
            <Card.Body>
              <Card.Title className="text-center fs-4 fw-bold fw-bold">Pizzas</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card className="cardCategory border-0">
            <Card.Img
              variant="top"
              src={hamburguesas}
              className="imgCategory"
              alt="opción de hamburguesa"
              title="opción de hamburguesa"
            />
            <Card.Body>
              <Card.Title className="text-center fs-4 fw-bold">Hamburguesas</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card className="cardCategory border-0">
            <Card.Img
              variant="top"
              src={pastas}
              className="imgCategory"
              alt="opción de pastas"
              title="opción de pastas"
            />
            <Card.Body>
              <Card.Title className="text-center fs-4 fw-bold">Pastas</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card className="cardCategory border-0">
            <Card.Img
              variant="top"
              src={empanadas}
              className="imgCategory"
              alt="opción de empanadas"
              title="opción de empanadas"
            />
            <Card.Body>
              <Card.Title className="text-center fs-4 fw-bold">Empanadas</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      <Carousel slide={false} className="px-3 d-none d-md-block">
        <Carousel.Item interval={3000}>
          <Row>
            <Col>
              <Card className="cardCategory border-0">
                <Card.Img
                  variant="top"
                  src={pizzas}
                  className="imgCategory"
                  alt="opción de pizza"
                  title="opción de pizza"
                />
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold">Pizzas</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardCategory border-0">
                <Card.Img
                  variant="top"
                  src={hamburguesas}
                  className="imgCategory"
                  alt="opción de hamburguesa"
                  title="opción de hamburguesa"
                />
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold">
                    Hamburguesas
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Row>
            <Col>
              <Card className="cardCategory border-0">
                <Card.Img
                  variant="top"
                  src={pastas}
                  className="imgCategory"
                  alt="opción de pastas"
                  title="opción de pastas"

                />
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold">Pastas</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardCategory border-0">
                <Card.Img
                  variant="top"
                  src={empanadas}
                  className="imgCategory"
                  alt="opción de empanadas"
                  title="opción de empanadas"
                />
                <Card.Body>
                  <Card.Title className="text-center fs-4 fw-bold">
                    Empanadas
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarruselCategorias;
