import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLogin from "../../assets/imgLogin.jpeg";
import "../../styles/login.css";
import { useForm } from "react-hook-form";
import { leerUsuariosAPI, login } from "../../helpers/queries";
import { useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    const respuesta = await login(usuario);
    console.log(usuario);
    if (respuesta.status === 201) {
            // Agregar verificacion del rol de usuario con leerUsuariosAPI   
            //  Comparacion de correo y contraseña de nuevo (desde el front) con un IF
      const datos = await respuesta.json()
      console.log(datos)
      if (datos.rol === "admin") {
        console.log("soyadmin1234");
        sessionStorage.setItem(
          "usuarioLogeado",
          JSON.stringify(datos.correo)
          // Guardar en el session la variable de datos.correo
        );
      } else if (datos.rol === "usuario") {
        console.log("iniciaste como usuario");
        sessionStorage.setItem(
          "usuarioLogeado",
          JSON.stringify(datos.correo)
           // Guardar en el session la variable de datos.correo
        );
      } else {
        console.log("El usuario no existe");
      }
    }
 
  };

  return (
    <div className="d-flex">
      <section className="d-none d-sm-block">
        <img
          src={imgLogin}
          alt="mesero sirviendo a clientes"
          title="mesero sirviendo a clientes"
          className="imgLogin h-100"
        />
      </section>
      <section className="sectionLogin bg-white">
        <div className="text-center">
          <h1 className="my-4">Inicia sesión</h1>
        </div>
        <Form
          className="px-2 px-md-5 pb-2 formText"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              {...register("correo", {
                required: "El correo es obligatorio",
                minLenght: {
                  value: 3,
                  message: "El correo debe contener al menos 3 carácteres",
                },
                maxLength: {
                  value: 265,
                  message: "El correo debe contener como máximo 265 carácteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una direccion de correo válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.correo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder="contraseña"
              {...register("clave", {
                required: "La clave es obligatoria",
                minLength: {
                  value: 8,
                  message: "La clave debe tener al menos 8 carácteres",
                },
                maxLength: {
                  value: 16,
                  message: "La clave debe tener como máximo 16 carácteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <Button className="w-100 mb-3" variant="success" type="submit">
            Ingresar
          </Button>
          <Link to="./error404">¿Has olvidado tu contraseña?</Link>
          <Link
            to="./error404"
            className="btn btn-outline-danger w-100 mb-3 mt-5"
          >
            <i className="fa-brands fa-google"></i> Ingresar con Google
          </Link>
          <Link
            to="./error404"
            className="btn btn-outline-primary w-100 mb-3 mb-md-5"
          >
            <i className="fa-brands fa-facebook"></i> Ingresar con Facebook
          </Link>
          <p className="text-center">
            ¿Aún no te creaste una cuenta?{" "}
            <Link to={"/registro"}>Crear cuenta</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Login;
