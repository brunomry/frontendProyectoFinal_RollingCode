import React from "react";
import "../../styles/menu.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import imagenProducto from "../../assets/imagenProductoPrueba.png";
import CardProducto from "./product/CardProducto";

const Menu = () => {
  return (
    <>
      <section className="bannerMenu d-flex flex-column justify-content-center align-items-center">
        <h1 className="title fw-bold">Nuestro Menu</h1>
        <p className="fw-bold bannerText">
          ¡Descubre nuestro festín de sabores!
        </p>
        <button className="bannerBTN">
          <a href="" className="link-light fw-bold">
            ~ Descargar el menú ~
          </a>
        </button>
      </section>
      <div className="border-bottom border-secondary d-flex justify-content-center py-3 pe-2 menuCategoryContainer position-sticky top-0">
        <Button className="me-3" variant="warning">
          <a className="link-dark text-decoration-none" href="#pizzas">
            Pizzas
          </a>
        </Button>
        <Button className="me-3" variant="warning">
          <a className="link-dark text-decoration-none" href="#hamburguesas">
            Hamburguesas
          </a>
        </Button>
        <Button className="me-3" variant="warning">
          <a className="link-dark text-decoration-none" href="#pastas">
            Pastas
          </a>
        </Button>
        <Button variant="warning">
          <a className="link-dark text-decoration-none" href="#empanadas">
            Empanadas
          </a>
        </Button>
      </div>
      <Form className="d-flex justify-content-center my-3 px-2">
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
      <Container className="mb-5">
        <div className="categoryPizza d-flex align-items-center" id="pizzas">
          <h2 className="categoryTitle">Pizzas</h2>
        </div>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
      <Container className="mb-5">
        <div className="categoryBurger d-flex align-items-center" id="hamburguesas">
          <h2 className="categoryTitle">Hamburguesas</h2>
        </div>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
      <Container className="mb-5">
        <div id="pastas">
        <h2 className="categoryTitle">Pastas</h2>
        </div>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
      <Container className="mb-5">
        <div id="empanadas">
        <h2 className="categoryTitle">Empanadas</h2>
        </div>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
