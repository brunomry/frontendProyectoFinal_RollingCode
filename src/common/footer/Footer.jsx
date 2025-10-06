import { Col, Container, Form, Row } from "react-bootstrap";
import "./footer.css";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconLocation from "../icons/IconLocation";
import IconWpp from "../icons/IconWpp";

const Footer = () => {
  return (
    <Container fluid className="footer border-top container">
      <Row>
        <Col md={12} lg={4} className="d-flex justify-content-center mb-3">
          <div className="d-flex flex-column align-items-center gap-4">
            <img
              src={logo}
              alt="Logo de ambiente bohemio"
              title="Logo Ambiente Bohemio"
              className="logo"
            />
            <div className="socialMedia d-flex  gap-md-3">
              <Link to="*" target="_blank" title="perfil de facebook">
                <IconFacebook></IconFacebook>
              </Link>
              <Link
                to="*"
                target="_blank"
                title="perfil de instagram"
                className="text-center"
              >
                <IconInstagram></IconInstagram>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="d-none d-md-block">
          <p className="">Opciones</p>
          <Link className="text-decoration-none text-secondary item" to="/">
            <p className="fw-normal">Home</p>
          </Link>
          <Link className="text-decoration-none text-secondary item" to="/menu">
            <p className="fw-normal">Menú</p>
          </Link>
          <Link
            className="text-decoration-none text-secondary item"
            to="/us"
          >
            <p className="fw-normal">Sobre Nosotros</p>
          </Link>
        </Col>
        <Col xs={12} md={4} lg={3} className="containerInformation">
          <p className="">Información</p>
          <Link className="text-decoration-none text-secondary item" to="*">
            <p className="fw-normal">Políticas de privacidad</p>
          </Link>
          <Link
            className="text-decoration-none text-secondary item"
            to="/team"
          >
            <p className="fw-normal">Equipo de Desarrollo</p>
          </Link>
        </Col>
        <Col xs={12} md={4} lg={3} className="containerContact">
          <p className="">Contacto</p>
          <div className="d-flex justify-content-between d-flex flex-column align-items-center flex-md-row gap-2">
            <div>
              <p className="fw-normal text-secondary item d-flex gap-2 align-items-center">
                <IconWpp></IconWpp>
                <span className="text-secondary">1231234567</span>
              </p>
              <p className="fw-normal text-secondary item d-flex gap-2 align-items-center">
                <IconLocation></IconLocation>
                <span> General Paz 576, San Miguel de Tucumán</span> 
              </p>
            </div>
            
          </div>
          <div className="formContainer w-100 pt-3 d-flex flex-column align-items-center align-items-md-start">
            <p className=""> Suscríbete para recibir más información</p>
            <Form className="contactForm d-flex w-100">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control  input item"
                  placeholder="juanperez@ejemplo.com"
                  title="Escribe tu correo"
                  required
                />
                <button
                  className="btn btn-warning item"
                  type="submit"
                  id="button-addon2"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <p className="text-center mt-3 fw-normal item text-secondary">
        &copy; AmbienteBohemio. Todos los derechos reservados. 2024 - 2025.
      </p>
    </Container>
  );
};

export default Footer;
