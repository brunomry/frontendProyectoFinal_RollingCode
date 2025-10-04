import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/register.css";
import { useForm } from "react-hook-form";
import { claveValidation, correoValidation, nombreValidation } from "../validations/authValidations";
import { useRegister } from "../hooks/useRegister";
import useAlert from "@/hooks/useAlert";
import { getRedirectPath } from "@/utils/navigation";
import { useHandleError } from "@/hooks/useHandleError";
import Load from "@/common/loader/Load";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleRegister, status } = useRegister();
  const { handleError } = useHandleError();
  const { autoCloseAlert } = useAlert();

  const handleAuth = async (user) => {
     try {
      const result = await handleRegister(user);
      autoCloseAlert(`Bienvenido ${result.data.nombreCompleto}`, "success");
      navigate(getRedirectPath(result.data.rol));
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <section className="d-flex containerRegister d-flex justify-content-center px-2 w-100 sectionTop">
      <div className="containerFormRegister text-white d-flex flex-column rounded-2">
        <div className="text-center">
          <h1 className="my-3 text-center">Regístrate</h1>
        </div>
        <Form
          className="px-3 px-md-5 pb-2 formRegister text-white"
          onSubmit={handleSubmit(handleAuth)}
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
              placeholder="Juan Perez"
              {...register("nombreCompleto", nombreValidation)}
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
              placeholder="juanperez@gmail.com"
              {...register("correo", correoValidation)}
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
              {...register("clave", claveValidation)}
            />
            <Form.Text className="text-warning">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <button
            className="w-100 mb-3 btnRegister border-0 py-2 text-white d-flex gap-3 align-items-center justify-content-center"
            type="submit"
          >
            {status === "loading" && <Load></Load>}
            Registrarme
          </button>
          <div className="d-flex flex-column">
            <Link
              to="./error404"
              className="optionGoogle rounded-2 w-100 mb-3 py-2 text-center"
            >
              <i className="fa-brands fa-google"></i> Registrarme con Google
            </Link>
            <p className="text-center text-white">
              ¿Ya tienes una cuenta?{" "}
              <Link to={"/auth/login"} className="text-white">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Register;
