import React from "react";
import "../../styles/navbar.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
const MenuNavegacion = () => {
  return (
    <>
      <header className="d-flex justify-content-between p-3 align-items-center">
        <div>
          <i className="fa-brands fa-facebook-f fa-2xl me-3"> </i>{" "}
          <i className="fa-brands fa-instagram fa-2xl me-3"></i>{" "}
          <i class="fa-brands fa-x-twitter fa-2xl"></i>
        </div>
        <div>
          <h1>MARCA/LOGO</h1>
        </div>
        <div>
          <p>
            {" "}
            <i class="fa-brands fa-whatsapp fa-2xl"></i> 123-1234567
          </p>
        </div>
      </header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="text-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Menu</Nav.Link>
                <Nav.Link href="#home">Nosotros</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
                <Nav.Link href="#home">Mi cuenta</Nav.Link>
                <Nav.Link href="#link">Mi pedido</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNavegacion;
