import { Button, Form, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLogin from "../../assets/imgLogin.jpeg"
import "../../styles/login.css"

const Login = () => {
  return (
    <div className="d-flex">
      <section className="d-none d-sm-block">
        <img src={imgLogin} alt="imagen del login" className="imgRegistro" />
      </section>
      <section className="sectionRegistro bg-white">
        <div className="text-center">
          <h1 className="mt-3">Inicia sesión</h1>
        </div>
        <Form className="px-2 px-md-5 formText">
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
          <a href="#" className="btn btn-outline-danger w-100 mb-3">
          <i className="fa-brands fa-google"></i> Registrarme con Google
          </a>
          <a href="#" className="btn btn-outline-primary w-100 mb-3 mb-md-5">
          <i className="fa-brands fa-facebook"></i> Registrarme con Facebook
          </a>
          <p className="text-center">
            ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Login;