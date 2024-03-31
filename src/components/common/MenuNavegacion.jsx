import React from "react";
import "../../styles/navbar.css";
import {Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
const MenuNavegacion = () => {
  return (
    <>
      <header className="p-3 d-none d-md-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-between align-items-center">
        <div>
          <i className="fa-brands fa-facebook-f fa-2xl me-3"> </i>
          <i className="fa-brands fa-instagram fa-2xl me-3"></i>
          <i className="fa-brands fa-x-twitter fa-2xl"></i>
        </div>
        <div>
          <h1>MARCA/LOGO</h1>
        </div>
        <div>
          <p>
            <i className="fa-brands fa-whatsapp fa-2xl"></i> 123-1234567
          </p>
        </div>
      </header>
        <Navbar expand="md"  className="navLinks navbarBackground">
          <Container>
            <Navbar.Brand href="#home" className="d-block d-md-none">
              MARCA/LOGO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto align-items-center">
                <Nav.Link className="navLink" href="#"><b>Inicio</b></Nav.Link>
                <Nav.Link className="navLink" href="#"><b>Menu</b></Nav.Link>
                <Nav.Link className="navLink" href="#"><b>Nosotros</b></Nav.Link>
                <Nav.Link className="navLink" href="#"><b>Contacto</b></Nav.Link>
                <Nav.Link className="navLink" href="#">
                  {" "}
                  <i className="fa-solid fa-cart-shopping fa-2xl"></i><b>Mi pedido</b>
                </Nav.Link>
                <Nav.Link className="border border-1 border-dark rounded-2 me-2 my-1" href="#"><b>Iniciar sesión</b></Nav.Link>
                <Nav.Link className="border border-1 border-dark rounded-2 me-2 my-1" href="#"><b>Registrarme</b></Nav.Link>
                <Nav.Link className="d-none border border-1 border-dark rounded-2 me-2 my-1" href="#"><b>Cerrar sesión</b></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default MenuNavegacion;
