import { Button, Form, FormCheck } from "react-bootstrap";
import logo from "../../assets/logo.png";
import imgRegistro from "../../assets/imgRegistro.jpg";
import "../../styles/registro.css";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="d-flex">
      <section className="sectionRegistroImage d-none d-sm-block">
        <img src={imgRegistro} alt="" className="imgRegistro" />
      </section>
      <section className="sectionRegistro bg-white">
        <div className="text-center">
          <h1 className="mt-3">Regístrate</h1>
        </div>
        <Form className="px-2 px-md-5">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="contraseña" />
          </Form.Group>
          <Button className="w-100 mb-3" variant="success" type="submit">
            Registrarme
          </Button>
          <div className="d-flex mb-3">
            <FormCheck className="pe-2"></FormCheck>
            <p>Recibir Descuentos y Promociones por Email</p>
          </div>
          <a href="#" className="btn btn-outline-primary w-100 mb-3">
            Registrarme con Google
          </a>
          <a href="#" className="btn btn-outline-primary w-100 mb-3 mb-md-5">
            Registrarme con Facebook
          </a>
          <p className="text-center">
            ¿Ya tienes una cuenta? <Link to={"/login"}>iniciar sesion</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Registro;
