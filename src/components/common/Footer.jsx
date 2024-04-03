import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <Container fluid className="footerContainer py-5">
      <Row>
        <Col
          md={12}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3"
        >
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
        <Col xs={12} md={4} lg={3} className="containerInformation">
          <h4 className="footerTitleSection">Información</h4>
          <p>Políticas de privacidad</p>
          <p>Legal</p>
          <p>Promociones</p>
          <p>Horarios de atención</p>
        </Col>
        <Col xs={12} md={4} lg={3} className="containerContact">
          <h4 className="footerTitleSection">Contacto</h4>
          <div className="d-flex justify-content-between containerSocialMedia">
            <div>
              <p>
                <i className="fa-brands fa-whatsapp fa-xl"></i> 123-1234567
              </p>
              <p>
                <i className="fa-solid fa-location-dot fa-xl"></i> Gral. Paz 576
              </p>
            </div>
            <div className="socialMedia d-md-flex flex-column gap-3">
              <a href="https://www.instagram.com/" target="_blank">
                <i className="instagramIcon fa-brands fa-instagram fa-2xl me-md-2 me-lg-2 link-dark"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="twitterIcon fa-brands fa-x-twitter fa-2xl me-md-2 me-lg-2 link-dark"></i>
              </a>
              <a href="https://twitter.com/home" target="_blank">
                <i className="fa-brands fa-facebook-f fa-2xl link-dark"></i>
              </a>
            </div>
          </div>
          <div className="formContainer pt-2">
            <h4 className="formTitle">
              {" "}
              Suscríbete para recibir más información
            </h4>
            <Form className="contactForm d-flex">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="ejemplo@correo.com"
                  required
                />
                <button
                  class="btn btn-warning"
                  type="submit"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
