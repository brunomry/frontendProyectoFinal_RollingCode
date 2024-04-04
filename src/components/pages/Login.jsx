import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLogin from "../../assets/imgLogin.jpeg"
import "../../styles/login.css"

const Login = () => {
  return (
    <div className="d-flex">
      <section className="d-none d-sm-block">
        <img src={imgLogin} alt="imagen del login" className="imgLogin" />
      </section>
      <section className="sectionLogin bg-white">
        <div className="text-center">
          <h1 className="my-4">Inicia sesión</h1>
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
            Ingresar
          </Button>
          <a href="#">¿Has olvidado tu contraseña?</a>
          <a href="#" className="btn btn-outline-danger w-100 mb-3 mt-5">
          <i className="fa-brands fa-google"></i> Ingresar con Google
          </a>
          <a href="#" className="btn btn-outline-primary w-100 mb-3 mb-md-5">
          <i className="fa-brands fa-facebook"></i> Ingresar con Facebook
          </a>
          <p className="text-center">
            ¿Aún no te creaste una cuenta? <Link to={"/registro"}>Crear cuenta</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Login;