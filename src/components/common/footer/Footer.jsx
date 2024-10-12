import { Col, Container, Form, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="footerContainer pt-5 pb-1 mt-auto text-secondary">
      <Row>
        <Col md={12} lg={3} className="d-flex justify-content-center mb-3">
          <img
            src={logo}
            alt="Logo de ambiente bohemio"
            title='Logo Ambiente Bohemio'
            className="footerIMG"
          />
        </Col>
        <Col className="d-none d-md-block">
          <h5 className="footerTitleSection ">Opciones</h5>
          <Link className="text-decoration-none text-secondary" to="/">
            <p className="fw-normal">Home</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="/menu">
            <p className="fw-normal">Menú</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="/nosotros">
            <p className="fw-normal">Sobre Nosotros</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="/contacto">
            <p className="fw-normal">Contacto</p>
          </Link>
        </Col>
        <Col xs={12} md={4} lg={3} className="containerInformation">
          <h5 className="footerTitleSection">Información</h5>
          <Link className="text-decoration-none text-secondary" to="*">
            <p className="fw-normal">Políticas de privacidad</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="/equipo">
            <p className="fw-normal">Equipo de Desarrollo</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="*">
            <p className="fw-normal">Promociones</p>
          </Link>
          <Link className="text-decoration-none text-secondary" to="*">
            <p className="fw-normal">Horarios de atención</p>
          </Link>
        </Col>
        <Col xs={12} md={4} lg={3} className="containerContact">
          <h5 className="footerTitleSection">Contacto</h5>
          <div className="d-flex justify-content-between d-flex flex-column align-items-center flex-md-row gap-2">
            <div>
              <p className="fw-normal text-secondary">
                <i className="fa-brands fa-whatsapp fa-xl"></i> <span className="text-secondary">1231234567</span>
              </p>
              <p className="fw-normal text-secondary">
                <i className="fa-solid fa-location-dot fa-xl"></i> Gral. Paz 576
              </p>
            </div>
            <div className="socialMedia d-flex flex-md-column gap-md-3">
            <Link to="*" target="_blank" title="facebook">
                <i className="fa-brands fa-facebook-f fa-2xl text-secondary me-4 me-md-0"></i>
              </Link>
              <Link to="*" target="_blank" title="instagram" className="text-center">
                <i className="iconSocial fa-brands fa-instagram fa-2xl me-md-2 me-lg-2 text-secondary"></i>
              </Link>  
            </div>
          </div>
          <div className="formContainer w-100 pt-3 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="formTitle">
              {" "}
              Suscríbete para recibir más información
            </h5>
            <Form className="contactForm d-flex w-100">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-secondary input"
                  placeholder="ejemplo@correo.com"
                  required
                />
                <button
                  className="btn btn-warning"
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
      <p className="text-center mt-3 fw-normal">
        &copy;AmbienteBohemio. Todos los derechos reservados. 2024.
      </p>
    </Container>
  );
};

export default Footer;
