import { Button, Form, FormCheck } from "react-bootstrap";
import "../../styles/registro.css";

const Registro = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <section className=" seccionRegistro">
        <div className="card my-5 border container">
          <Form className="px-3">
            <div className="text-center">
              <img src="" alt="" />
              <h3>Regístrate</h3>
            </div>
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
          <div className="d-flex mb-5">
          <FormCheck className="pe-2"></FormCheck>
          <p>Recibir Descuentos y Promociones por Email</p>
          </div>
          <a href="#" className="btn btn-outline-primary w-100 mb-3">Registrarme con Google</a>
          <a href="#" className="btn btn-outline-primary w-100 mb-5">Registrarme con Facebook</a>
          <p className="text-center">¿Ya tienes una cuenta? <a href="#">iniciar sesion</a></p>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Registro;
