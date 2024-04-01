import { Carousel, Card, Row,Col} from "react-bootstrap";
import pizzas from "../../../assets/Inicio/pizzas.jpg";
import pastas from "../../../assets/Inicio/pastas(1).jpg";
import empanadas from "../../../assets/Inicio/empanadas.jpg";
import hamburguesas from "../../../assets/Inicio/hamburguesas.jpg";
import "../../../styles/index.css";


const CarruselCategorias = () => {
  return (
    <Carousel slide={false}>
    <Carousel.Item interval={3000}>
      <Row>
        <Col>
          <Card className="cardCategory border-0">
            <Card.Img variant="top" src={pizzas} className="imgCategory"/>
            <Card.Body>
              <Card.Title className="text-center fs-4">Pizzas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="cardCategory border-0">
            <Card.Img variant="top" src={hamburguesas} className="imgCategory"/>
            <Card.Body>
              <Card.Title className="text-center fs-4">Hamburguesas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <Row>
        <Col>
        <Card className="cardCategory border-0">
            <Card.Img variant="top" src={pastas} className="imgCategory"/>
            <Card.Body>
              <Card.Title className="text-center fs-4">Pastas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="cardCategory border-0">
            <Card.Img variant="top" src={empanadas} className="imgCategory"/>
            <Card.Body>
              <Card.Title className="text-center fs-4">Empanadas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
  );
};

export default CarruselCategorias;
