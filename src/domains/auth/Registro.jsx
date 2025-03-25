import { Form, FormCheck } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./styles/registro.css";
import { useForm } from "react-hook-form";
import { enviarDatosCorreo } from "../../queries/correo.queries";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../../queries/auth.queries";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const usuarioValidado = async (usuario) => {
    const nuevo_usuario = {
      nombreCompleto: usuario.nombreCompleto,
      correo: usuario.correo.toLowerCase(),
      clave: usuario.clave,
    };

    const respuesta = await crearUsuarioAPI(nuevo_usuario);
    console.log(respuesta);
    
    if (respuesta.status === 400) {
      Swal.fire({
        title: "El correo ingresado ya existe",
        text: "Por favor ingrese un correo nuevo",
        icon: "error",
        timer: 3000,
      });
      return;
    }


      if (respuesta.status === 201) {
        Swal.fire({
          title: "Te registraste exitosamente",
          html: "Se envió un correo de verificación a tu bandeja de entrada (principal o spam) </br> <b>Por favor, inicia sesión para continuar</b>",
          icon: "success",
        });
        const direccionCorreo = { correo: nuevo_usuario.correo };
        await enviarDatosCorreo(direccionCorreo);
        reset();
        
      Swal.fire({
        title: "Espere un momento",
        timer: 1300
      });

        navegacion("/login");
      }
  };

  return (
    <section className="d-flex containerRegister d-flex justify-content-center py-5 px-2 w-100 sectionTop">
      <div className="containerFormRegister text-white d-flex flex-column">
        <div className="text-center">
          <h1 className="my-3 text-center">Regístrate</h1>
        </div>
        <Form
          className="px-3 px-md-5 pb-2 formRegister text-white"
          onSubmit={handleSubmit(usuarioValidado)}
        >
          <Form.Group className="mb-2">
            <Form.Label htmlFor="fullnameRegister">
              Nombre y Apellido
            </Form.Label>
            <Form.Control
              title="Ingresa tu nombre y apellido"
              type="text"
              id="fullnameRegister"
              className="inputFormRegister"
              placeholder="nombre y apellido"
              {...register("nombreCompleto", {
                required: "El nombre y apellido es obligatorio",
                minLength: {
                  value: 7,
                  message:
                    "El nombre y apellido debe tener como minimo 7 caracteres",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre y apellido debe tener como maximo 30 caracteres",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.nombreCompleto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="emailRegister">Correo electrónico</Form.Label>
            <Form.Control
              title="Ingresa tu correo electrónico"
              id="emailRegister"
              type="email"
              className="inputFormRegister"
              placeholder="nombre@gmail.com"
              {...register("correo", {
                required: "El correo electrónico es obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El correo electrónico debe contener al menos 3 caracteres",
                },
                maxLength: {
                  value: 265,
                  message:
                    "El correo electrónico debe contener como máximo 265 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.correo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="passwordRegister">Contraseña:</Form.Label>
            <Form.Control
              title="Ingresa tu contraseña"
              id="passwordRegister"
              type="password"
              className="inputFormRegister"
              placeholder="claVe123"
              {...register("clave", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message:
                    "La contraseña debe contener como minimo 8 caracteres",
                },
                maxLength: {
                  value: 16,
                  message:
                    "La contraseña debe contener como maximo 16 caracteres",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "La contraseña debe contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <button
            className="w-100 mb-3 btnRegister border-0 py-2 text-white"
            type="submit"
          >
            Registrarme
          </button>
          <div className="d-flex mb-3">
            <FormCheck className="pe-2"></FormCheck>
            <p className="fw-normal mt-0">
              Recibir Descuentos y Promociones por Email
            </p>
          </div>
          <div className="d-flex flex-column">
            <Link
              to="./error404"
              className="optionGoogle rounded-2 w-100 mb-3 py-2 text-center"
            >
              <i className="fa-brands fa-google"></i> Registrarme con Google
            </Link>
            <p className="text-center text-white">
              ¿Ya tienes una cuenta?{" "}
              <Link to={"/login"} className="text-white">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Registro;
