import React, { useState } from "react";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { roles } from "../../helpers/constants";
import { obtenerUsuario } from "../../helpers/sesion/sesion.functions";

const MenuNavegacion = ({
  usuarioLogeado,
  setUsuarioLogeado,
  productosCarrito,
}) => {
  const [desplegarNavbar, setDesplegarNavbar] = useState();

  const navLinkClick = () => {
    setDesplegarNavbar(false);
  };

  const menuBTNClick = () => {
    setDesplegarNavbar(true);
    if (desplegarNavbar == true) {
      setDesplegarNavbar(false);
    }
  };
  const navegacion = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
      text: "¿Estás seguro que deseas salir?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("usuarioLogeado");
        setUsuarioLogeado(obtenerUsuario());
        sessionStorage.removeItem("carrito");
        navegacion("/login");
        window.location.reload();
      }
    });
  };

  const myOrderAlert = () => {
    Swal.fire({
      title: "Información",
      icon: "info",
      html: `
        Para preparar tu pedido debes
        <a href="/login">Iniciar sesión</a> o 
        <a href="/registro">Registrarte</a>
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Entendido",
    });
  };

  let contadorCarrito = productosCarrito.length;

  return (
    <>
      <Navbar
        expand="md"
        className="navBarSticky navLinks navbarBackground"
        expanded={desplegarNavbar}
      >
        <Container fluid>
          <Navbar.Brand className="d-block" as={Link} to="/">
            <img
              src={logo}
              alt="Logo ambiente bohemio"
              title="Logo Ambiente Bohemio"
              className="img-fluid logoMobile"
              onClick={navLinkClick}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-secondary"
            onClick={menuBTNClick}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center gap-2">
              <NavLink
                className="navLink nav-link text-center text-white fw-normal"
                to="/"
                onClick={navLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                className="navLink nav-link text-center text-white"
                to="/menu"
                onClick={navLinkClick}
              >
                Nuestro Menú
              </NavLink>
              <NavLink
                className="navLink nav-link text-center text-white"
                to="/nosotros"
                onClick={navLinkClick}
              >
                Sobre Nosotros
              </NavLink>
              <NavLink
                className="navLink d-block d-md-none nav-link text-center text-white"
                to="/contacto"
                onClick={navLinkClick}
              >
                Contacto
              </NavLink>

              {usuarioLogeado?.rol === roles.ADMIN && (
                <>
                  <NavLink
                    className="navLink nav-link text-center text-white"
                    to="/administrador"
                    onClick={navLinkClick}
                  >
                    Administración
                  </NavLink>
                  <button
                    className="navLinkBTN nav-link border border-1 border-secondary rounded-2 mx-2 my-1 px-2 fw-normal text-white"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </button>
                </>
              )}
              {usuarioLogeado?.rol === roles.USUARIO && (
                <>
                  <NavLink
                    className="navLink nav-link text-center text-white"
                    to="/pedido/miPedido"
                    onClick={navLinkClick}
                  >
                    {contadorCarrito > 0 && (
                      <span className="bg-danger me-2 px-2 fw-normal text-white rounded-pill">
                        {contadorCarrito}
                      </span>
                    )}
                    Mi Pedido
                  </NavLink>
                  <NavLink
                    className="navLink nav-link text-center fw-normal text-white"
                    to="/pedido/misPedidos"
                    onClick={navLinkClick}
                  >
                    Mis Pedidos
                  </NavLink>
                  <button
                    className="navLinkBTN nav-link border border-1 border-secondary rounded-2 mx-2 my-1 px-2 fw-normal text-white"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </button>
                </>
              )}
              {usuarioLogeado?.rol === undefined && (
                <>
                  <NavLink
                    className="d-none myOrderBTN nav-link fw-normal text-center text-white"
                    onClick={myOrderAlert}
                  >
                    <span className="fw-normal">Mi Pedido</span>
                  </NavLink>
                  <NavLink
                    className="nav-link btnNav rounded-2 mx-2 my-1 px-2 text-white"
                    to="/login"
                    onClick={navLinkClick}
                  >
                    Iniciar sesión
                  </NavLink>
                  <NavLink
                    className="nav-link btnNav rounded-2 mx-2 my-1 px-2 text-white"
                    to="/registro"
                    onClick={navLinkClick}
                  >
                    Registrarme
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuNavegacion;
