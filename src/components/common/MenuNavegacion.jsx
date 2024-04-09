import React from "react";
import "../../styles/navbar.css";
import {Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom";

const MenuNavegacion = ({usuarioLogeado, setUsuarioLogeado}) => {
  return (
    <>
      <header className="p-2 d-none d-md-block d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-between align-items-center">
        <div>
          <Link to="*" target="_blank"><i className="fa-brands fa-facebook-f fa-2xl mx-3 link-primary"> </i></Link>
          <Link to="*" target="_blank"><i className="fa-brands fa-instagram fa-2xl me-3 link-danger"></i></Link>
          <Link to="*" target="_blank"><i className="fa-brands fa-x-twitter fa-2xl link-dark"></i></Link>
        </div>
        <div>
          <Link to="/"><img src={logo} alt="Logo ambiente bohemio" className="img-fluid logo" /></Link>
        </div>
        <div>
          <p className="me-3">
            <i className="fa-brands fa-whatsapp fa-2xl link-success"></i> 123-1234567
          </p>
        </div>
      </header>
        <Navbar expand="md" className="navLinks navbarBackground">
          <Container fluid>
            <Navbar.Brand className="d-block d-md-none" as={Link} to="/">
              <img src={logo} alt="Logo ambiente bohemio" className="img-fluid logoMobile" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto align-items-center">
                <NavLink className="navLink nav-link text-center" to="/"><b>INICIO</b></NavLink>
                <NavLink className="navLink nav-link text-center" to="/menu"><b>MENÚ</b></NavLink>
                <NavLink className="navLink nav-link text-center" to="/nosotros"><b>NOSOTROS</b></NavLink>
                <NavLink className="navLink nav-link text-center" to="/contacto"><b>CONTACTO</b></NavLink>
                <NavLink className="navLink nav-link d-none text-center" to="/administracion"><b>ADMINISTRACIÓN</b></NavLink>
                <NavLink className="navLink nav-link text-center" to="/miPedido">
                  {" "}
                  <i className="fa-solid fa-cart-shopping fa-xl"></i><b>MI PEDIDO</b>
                </NavLink>
                <NavLink className="navLinkBTN nav-link border border-1 border-dark rounded-2 mx-2 my-1 px-2" to="/login"><b>INICIAR SESIÓN</b></NavLink>
                <NavLink className="navLinkBTN nav-link border border-1 border-dark rounded-2 mx-2 my-1 px-2" to="/registro"><b>REGISTRARME</b></NavLink>
                <NavLink className="navLinkBTN nav-link d-none border border-1 border-dark rounded-2 me-2 my-1" to="#"><b>CERRAR SESIÓN</b></NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default MenuNavegacion;
