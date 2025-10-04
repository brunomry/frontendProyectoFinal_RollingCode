import { useState } from "react";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "@/assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { roles } from "@/helpers/constants.js";
import { useSelector } from "react-redux";
import { useLogout } from "@/hooks/useLogout";
import useAlert from "@/hooks/useAlert";

const MenuNavegacion = () => {
  const [desplegarNavbar, setDesplegarNavbar] = useState();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { closeSession } = useLogout();
  const { customAlert } = useAlert();
  const navigate = useNavigate();

  const navLinkClick = () => {
    setDesplegarNavbar(false);
  };

  const menuBTNClick = () => {
    setDesplegarNavbar(true);
    if (desplegarNavbar == true) {
      setDesplegarNavbar(false);
    }
  };

  const removeSession = () => {
    customAlert("¿Estás seguro que deseas salir?", () => {
      closeSession();
      navigate("/auth/login");
    });
  };

  return (
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
          <Nav className="mx-auto align-items-center gap-5">
            <ul className="d-flex align-items-center justify-content-center gap-2 mb-0">
              <NavLink
                className="navLink nav-link text-center"
                to="/"
                onClick={navLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                className="navLink nav-link text-center"
                to="/menu"
                onClick={navLinkClick}
              >
                Menú
              </NavLink>
              <NavLink
                className="navLink nav-link text-center"
                to="/us"
                onClick={navLinkClick}
              >
                Nosotros
              </NavLink>
              <NavLink
                className="navLink nav-link text-center "
                to="/mi-pedido"
                onClick={navLinkClick}
              >
                {/* {contadorCarrito > 0 && (
                      <span className="bg-danger me-2 px-2 fw-normal  rounded-pill">
                        {}
                      </span>
                    )} */}
                Mi Pedido
              </NavLink>
            </ul>
            {isAuth ? (
              <ul className="d-flex align-items-center justify-content-center mb-0 gap-2">
                {" "}
                <NavLink
                  className="nav-link "
                  to={`${
                    user.rol === roles.ADMIN ? "/admin" : "/user/profile"
                  }`}
                  onClick={navLinkClick}
                >
                  Mi cuenta
                </NavLink>{" "}
                <NavLink
                  className="nav-link "
                  to={"/auth/login"}
                  onClick={() => {
                    navLinkClick();
                    removeSession();
                  }}
                >
                  Salir
                </NavLink>
              </ul>
            ) : (
              <ul className="d-flex align-items-center justify-content-center mb-0 gap-2">
                {" "}
                <NavLink
                  className="nav-link "
                  to={"/auth/login"}
                  onClick={navLinkClick}
                >
                  Ingresar
                </NavLink>{" "}
                <NavLink className="nav-link " to={"/auth/register"}>
                  Registrarme
                </NavLink>
              </ul>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavegacion;
