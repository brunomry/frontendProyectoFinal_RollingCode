import React from "react";
import "../../styles/menu.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import imagenProducto from "../../assets/imagenProductoPrueba.png";
import CardProducto from "./product/CardProducto";

const Menu = () => {
  return (
    <>
      <section className="text-center bannerMenu d-flex flex-column justify-content-center">
        <h1 className="title">Nuestro Menu</h1>
        <p>¡Descubre nuestro festín de sabores!</p>
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
      <Container>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
