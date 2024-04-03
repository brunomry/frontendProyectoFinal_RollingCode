import React from "react";
import "../../styles/menu.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import imagenProducto from "../../assets/imagenProductoPrueba.png";
import CardProducto from "./product/CardProducto";

const Menu = () => {
  return (
    <>
      <section className="bannerMenu d-flex flex-column justify-content-center align-items-center">
        <h1 className="title pb-3">Nuestro Menu</h1>
        <p className="fw-bold bannerText pb-3">
          ¡Descubre nuestro festín de sabores!
        </p>
        <a className="bannerBTN text-center py-3 text-decoration-none" href="">
          DESCARGAR MENÚ
        </a>
      </section>
      <div className="border-bottom border-secondary d-flex justify-content-center py-3 pe-2 menuCategoryContainer position-sticky top-0">
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#pizzas"
        >
          Pizzas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#hamburguesas"
        >
          Hamburguesas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#pastas"
        >
          Pastas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#empanadas"
        >
          Empanadas
        </a>
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
          <h2 className="categoryTitle ">Pizzas</h2>
        </div>
        <Row>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
        </Row>
      </Container>
      <Container className="mb-5">
        <div
          className="categoryBurger d-flex align-items-center"
          id="hamburguesas"
        >
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
