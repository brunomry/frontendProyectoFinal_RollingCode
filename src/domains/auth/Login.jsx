import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/login.css";
import { useForm } from "react-hook-form";
import { leerUsuariosAPI, login } from "../../helpers/queries";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    let timerInterval;
    Swal.fire({
      title: "Iniciando sesión",
      html: `Validando datos`,
      timer: 1300,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    const usuarioLowerCase = {
      correo: usuario.correo.toLowerCase(),
      clave: usuario.clave,
    };
    const respuesta = await login(usuarioLowerCase);
    if (respuesta.status === 200) {
      const listaUsuarios = await leerUsuariosAPI();
      const usuarioBuscado = listaUsuarios.find(
        (u) => u.correo === usuarioLowerCase.correo
      );
      if (usuarioBuscado.rol === "Administrador" && usuarioBuscado.estado) {
        const datos = await respuesta.json();
        sessionStorage.setItem(
          "usuarioLogeado",
          JSON.stringify({
            id: usuarioBuscado._id,
            correo: usuarioBuscado.correo,
            rol: usuarioBuscado.rol,
            token: datos.token,
          })
        );
        setUsuarioLogeado({
          id: usuarioBuscado._id,
          correo: usuarioBuscado.correo,
          rol: usuarioBuscado.rol,
          token: datos.token,
        });

        navegacion("/administrador");
        Swal.fire({
          icon: "success",
          title: "Sesion iniciada como administrador",
          text: `Bienvenido ${usuarioBuscado.nombreCompleto}`,
        });
      }
      if (usuarioBuscado.rol === "Usuario" && usuarioBuscado.estado) {
        sessionStorage.setItem(
          "usuarioLogeado",
          JSON.stringify({
            id: usuarioBuscado._id,
            correo: usuarioBuscado.correo,
            rol: usuarioBuscado.rol,
          })
        );
        setUsuarioLogeado({
          id: usuarioBuscado._id,
          correo: usuarioBuscado.correo,
          rol: usuarioBuscado.rol,
        });
        navegacion("/");
        Swal.fire({
          icon: "success",
          title: "Sesion iniciada",
          text: `Bienvenido ${usuarioBuscado.nombreCompleto}`,
        });
      }

      if (!usuarioBuscado.estado) {
        Swal.fire({
          icon: "error",
          title: "Usuario suspendido.",
          text: "En este momento no puedes iniciar sesion.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo iniciar sesion",
        text: "Los datos ingresados no son correctos o esta deshabilitado.",
      });
    }
  };

  return (
    <section className="d-flex sectionTop px-2 containerLogin py-5 d-flex justify-content-center">
      <div className="containerFormLogin py-xl-5 rounded-5 text-white d-flex flex-column  gap-3">
        <h1 className="my-4 text-center">Inicia sesión</h1>
        <Form
          className="px-3 px-md-5 pb-2 text-white formText"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailLogin">Correo electrónico</Form.Label>
            <Form.Control
              title="Ingresa tu correo eléctrónico"
              type="email"
              id="emailLogin"
              className="py-xl-2 input inputFormLogin"
              placeholder="nombre@gmail.com"
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
                  message: "Ingrese una dirección de correo válida",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.correo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="passwordLogin">Contraseña</Form.Label>
            <Form.Control
              title="Ingresa tu contraseña"
              className="py-xl-2 input inputFormLogin"
              type="password"
              id="passwordLogin"
              placeholder="clave123"
              {...register("clave", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 carácteres",
                },
                maxLength: {
                  value: 16,
                  message: "La contraseña debe tener como máximo 16 carácteres",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "La contraseña debe tener al menos 1 letra minúscula y 1 letra mayúscula",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <button
            className="w-100 mb-3 btnLogin text-white w-100 py-2 rounded-0 border-0"
            type="submit"
          >
            Ingresar
          </button>
          <div className="d-flex flex-column w-100">
            <Link to="./error404" className="text-white text-center">
              ¿Has olvidado tu contraseña?
            </Link>
            <Link
              to="./error404"
              className=" text-center optionGoogle rounded-2 px-2 py-2 w-100 mb-3 mt-5"
            >
              <i className="fa-brands fa-google"></i>{" "}
              <span>Ingresar con Google</span>
            </Link>
            <p className="text-center">
              ¿Aún no tienes una cuenta?{" "}
              <Link to={"/registro"} className="text-white">
                Crear cuenta
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
