import React, { useState } from "react";
import "./navbar.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MenuNavegacion = ({
  usuarioLogeado,
  setUsuarioLogeado,
  productosCarrito,
}) => {
  const [desplegarNavbar, setDesplegarNavbar] = useState();

  const navLinkClick = () => {
    setDesplegarNavbar(false)
  };

  const menuBTNClick = () =>{
    setDesplegarNavbar(true);
    if (desplegarNavbar == true) {
      setDesplegarNavbar(false);
    }
  }
  const navegacion = useNavigate();
  const cerrarSesion = () => {
    if (usuarioLogeado.rol === "Usuario") {
      Swal.fire({
        title: "Cerrar sesión",
        text: "Si tienes elementos agregados en tu pedido se eliminarán",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión",
        cancelButtonText: "cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setUsuarioLogeado({});
          sessionStorage.removeItem("usuarioLogeado");
          sessionStorage.removeItem("carrito");
          navegacion("/");
          window.location.reload();
          Swal.fire({
            title: "Sesión cerrada",
            icon: "success",
            timer: 1300,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Cerrar sesión",
        text: "¿Estas seguro que deseas salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión",
        cancelButtonText: "cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setUsuarioLogeado({});
          sessionStorage.removeItem("usuarioLogeado");
          sessionStorage.removeItem("carrito");
          navegacion("/");
          window.location.reload();
          Swal.fire({
            title: "Sesión cerrada",
            icon: "success",
            timer: 1300,
          });
        }
      });
    }
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
      <Navbar expand="md" className="navBarSticky navLinks navbarBackground" expanded={desplegarNavbar}>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={menuBTNClick} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center gap-2">
              <NavLink className="navLink nav-link text-center text-white fw-normal" to="/" onClick={navLinkClick}>
                Home
              </NavLink>
              <NavLink className="navLink nav-link text-center text-white" to="/menu" onClick={navLinkClick}>
                Nuestro Menú
              </NavLink>
              <NavLink className="navLink nav-link text-center text-white" to="/nosotros" onClick={navLinkClick}>
                Sobre Nosotros
              </NavLink>
              {usuarioLogeado.rol === "Administrador" && (
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
              {usuarioLogeado.rol === "Usuario" && (
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
              {usuarioLogeado.rol === undefined && (
                <>
                  <NavLink
                    className="myOrderBTN nav-link fw-normal text-center text-white"
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
