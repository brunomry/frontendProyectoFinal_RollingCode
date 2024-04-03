import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <Container fluid className="footerContainer py-5">
      <Row>
        <Col md={12} lg={3} className="d-flex align-items-center justify-content-center mb-3">
          <img
            src={logo}
            alt="Logo de ambiente bohemio"
            className="footerIMG"
          />
        </Col>
        <Col className="d-none d-md-block">
          <h4 className="footerTitleSection">Opciones</h4>
          <p>Inicio</p>
          <p>Menú</p>
          <p>Nosotros</p>
          <p>Contacto</p>
        </Col>
        <Col xs={12} md={3} className="containerInformation">
          <h4 className="footerTitleSection">Información</h4>
          <p>Políticas de privacidad</p>
          <p>Legal</p>
          <p>Promociones</p>
          <p>Horarios de atención</p>
        </Col>
        <Col xs={12} md={3} className="containerContact">
          <h4 className="footerTitleSection">Contacto</h4>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <i className="fa-brands fa-whatsapp fa-xl"></i> 123-1234567
              </p>
              <p>
                <i className="fa-solid fa-location-dot fa-xl"></i> Gral. Paz 576
              </p>
            </div>
            <div>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram fa-2xl me-md-2 me-lg-4 link-dark"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-x-twitter fa-2xl me-md-2 me-lg-4 link-dark"></i>
              </a>
              <a href="https://twitter.com/home">
                <i className="fa-brands fa-facebook-f fa-2xl link-dark"></i>
              </a>
            </div>
          </div>

          <h4>Suscríbete para recibir más información</h4>
          <Form className="contactForm d-flex">
            <Form.Group>
              <Form.Control type="email" placeholder="ejemplo@correo.com" />
            </Form.Group>
            <Button className="formBTN" variant="warning" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
