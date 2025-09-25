import { Col, Container, Form, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="footer ">
      <Row>
        <Col md={12} lg={4} className="d-flex justify-content-center mb-3">
          <div className="d-flex flex-column align-items-center gap-4">
            <img
              src={logo}
              alt="Logo de ambiente bohemio"
              title="Logo Ambiente Bohemio"
              className="logo"
            />
            <div className="socialMedia d-flex  gap-md-3 gap-xl-4">
              <Link to="*" target="_blank" title="facebook">
                <i className="fa-brands fa-facebook-f fa-xl text-secondary me-4 me-md-0"></i>
              </Link>
              <Link
                to="*"
                target="_blank"
                title="instagram"
                className="text-center"
              >
                <i className="iconSocial fa-brands fa-instagram fa-xl me-md-2 me-lg-2 text-secondary"></i>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="d-none d-md-block">
          <h5 className="title">Opciones</h5>
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
          <h5 className="title">Información</h5>
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
          <h5 className="title">Contacto</h5>
          <div className="d-flex justify-content-between d-flex flex-column align-items-center flex-md-row gap-2">
            <div>
              <p className="fw-normal text-secondary item">
                <i className="fa-brands fa-whatsapp fa-xl"></i>{" "}
                <span className="text-secondary">1231234567</span>
              </p>
              <p className="fw-normal text-secondary item">
                <i className="fa-solid fa-location-dot fa-xl"></i> General Paz
                576, San Miguel de Tucumán
              </p>
            </div>
            
          </div>
          <div className="formContainer w-100 pt-3 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="title"> Suscríbete para recibir más información</h5>
            <Form className="contactForm d-flex w-100">
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control  input item"
                  placeholder="ejemplo@correo.com"
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
        &copy;AmbienteBohemio. Todos los derechos reservados. 2024.
      </p>
    </Container>
  );
};

export default Footer;
