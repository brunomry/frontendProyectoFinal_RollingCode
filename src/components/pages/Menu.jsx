import React from "react";
import "../../styles/menu.css";
import bannerMenu from "../../assets/bannerMenuProvisorio.png";
import { Button, Card, Form } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <section className="text-center bannerMenu d-flex flex-column justify-content-center">
        <h1>Nuestro Menu</h1>
        <p>elegí el plato que más prefieras</p>
        <a className="link-light" href="#">
          descargar el menú
        </a>
      </section>
      <div className="border-bottom border-black d-flex justify-content-center p-3">
        <Button className="me-3" variant="warning">
          Categoría 1
        </Button>
        <Button className="me-3" variant="warning">
          Categoría 2
        </Button>
        <Button className="me-3" variant="warning">
          Categoría 3
        </Button>
        <Button variant="warning">Categoría 4</Button>
      </div>
      <Form className="d-flex justify-content-center my-3">
        <Form.Group className="mb-3 searchForm" controlId="buscarMenu">
          <Form.Control
            type="email"
            placeholder="categoría, nombre de producto"
          />
        </Form.Group>
        <Button className="ms-2 searchBTN" variant="warning" type="submit">
          Buscar
        </Button>
      </Form>
      <Card style={{width: '18rem'}}>
        <Card.Body className="cardBody">
          <Card.Title>Papas fritas acordeón</Card.Title>
          <Card.Text>Papas muy ricas y crujientes. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Card.Text>
          <Button variant="warning">Detalles</Button>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://images.pexels.com/photos/14696271/pexels-photo-14696271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="cardIMG"
        />
      </Card>
    </>
  );
};

export default Menu;
