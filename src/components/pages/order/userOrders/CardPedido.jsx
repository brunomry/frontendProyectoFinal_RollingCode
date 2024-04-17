import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPedido = () => {
  return (
    <Card className="cardPedido">
      <Card.Header className="text-start">fechaPedido</Card.Header>
      <Card.Body>
        <Card.Title className="text-success fw-bold text-start">
          Realizado
        </Card.Title>
        <Card.Text></Card.Text>
        <div className="d-flex flex-column gap-2 flex-sm-row align-items-center justify-content-sm-center align-items-sm-start">
          <Button variant="primary">Ver detalles del Pedido</Button>
          <Button variant="secondary" as={Link} to="/*">Volver a comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPedido;
