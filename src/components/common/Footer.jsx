import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <Container fluid className="footerContainer py-3">
      <Row>
        <Col className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo de ambiente bohemio"
            className="footerIMG"
          />
        </Col>
        <Col>
            <h4 className="footerTitleSection">Opciones</h4>
            <p>Inicio</p>
            <p>Menú</p>
            <p>Nosotros</p>
            <p>Contacto</p>
        </Col>
        <Col>
            <h4 className="footerTitleSection">Información</h4>
            <p>Políticas de privacidad</p>
            <p>Legal</p>
            <p>Promociones</p>
            <p>Horarios de atención</p>
        </Col>
        <Col>
            <h4 className="footerTitleSection">Contacto</h4>
            <p><i className="fa-brands fa-whatsapp fa-xl"></i> 123-1234567</p>
            <p><i className="fa-solid fa-location-dot fa-xl"></i> Gral. Paz 576</p>
            <h4>Suscríbete para recibir más información</h4>
            <Form className="contactForm d-flex">
                <Form.Group>
                    <Form.Control type="email" placeholder="ejemplo@correo.com"/>
                </Form.Group>
                <Button className="formBTN" variant="warning" type="submit">Enviar</Button>
            </Form>
        </Col>
        {/* <Col className="d-flex flex-column mt-5">
            <a className="mb-3" href=""><i class="fa-brands fa-x-twitter fa-2xl link-light"></i></a>
            <a className="mb-3" href=""><i class="fa-brands fa-facebook-f fa-2xl link-light"></i></a>
            <a href=""><i class="fa-brands fa-instagram fa-2xl link-light"></i></a>
        </Col> */}

      </Row>
    </Container>
  );
};

export default Footer;
