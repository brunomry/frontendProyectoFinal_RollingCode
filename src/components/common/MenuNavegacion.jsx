import React from "react";
import "../../styles/navbar.css";
import {Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom";

const MenuNavegacion = () => {
  return (
    <>
      <header className="p-3 d-none d-md-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-between align-items-center">
        <div>
          <a href=""><i className="fa-brands fa-facebook-f fa-2xl mx-3 link-primary"> </i></a>
          <a href=""><i className="fa-brands fa-instagram fa-2xl me-3 link-light"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter fa-2xl link-secondary"></i></a>
        </div>
        <div>
          <img src={logo} alt="Logo ambiente bohemio" className="img-fluid logo" />
        </div>
        <div>
          <p className="me-3">
            <i className="fa-brands fa-whatsapp fa-2xl link-success"></i> 123-1234567
          </p>
        </div>
      </header>
        <Navbar expand="md"  className="navLinks navbarBackground">
          <Container>
            <Navbar.Brand className="d-block d-md-none" as={Link} to="/">
              <img src={logo} alt="Logo ambiente bohemio" className="img-fluid logoMobile" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto align-items-center">
                <NavLink className="navLink nav-link" to="/"><b>Inicio</b></NavLink>
                <NavLink className="navLink nav-link" to="/menu"><b>Menu</b></NavLink>
                <NavLink className="navLink nav-link" to="/nosotros"><b>Nosotros</b></NavLink>
                <NavLink className="navLink nav-link" to="/contacto"><b>Contacto</b></NavLink>
                <NavLink className="navLink nav-link" to="/miPedido">
                  {" "}
                  <i className="fa-solid fa-cart-shopping fa-2xl"></i><b>Mi pedido</b>
                </NavLink>
                <NavLink className="nav-link border border-1 border-dark rounded-2 me-2 my-1" to="/login"><b>Iniciar sesión</b></NavLink>
                <NavLink className="nav-link border border-1 border-dark rounded-2 me-2 my-1" to="/registrarme"><b>Registrarme</b></NavLink>
                <NavLink className="nav-link d-none border border-1 border-dark rounded-2 me-2 my-1" to="#"><b>Cerrar sesión</b></NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default MenuNavegacion;
