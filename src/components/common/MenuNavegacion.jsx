import React from "react";
import "../../styles/navbar.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
const MenuNavegacion = () => {
  return (
    <>
      <header className="p-3 d-none d-md-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-between">
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
      <Navbar expand="lg" className="bg-body-tertiary navLinks">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#">Inicio</Nav.Link>
                <Nav.Link href="#">Menu</Nav.Link>
                <Nav.Link href="#">Nosotros</Nav.Link>
                <Nav.Link href="#">Contacto</Nav.Link>
                <Nav.Link href="#">Mi cuenta</Nav.Link>
                <Nav.Link href="#">Mi pedido</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNavegacion;
