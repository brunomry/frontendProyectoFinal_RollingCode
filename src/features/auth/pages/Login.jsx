import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/uselogin";
import {
  correoValidation,
  claveValidation,
} from "../validations/authValidations";
import useAlert from "@/hooks/useAlert";
import { getRedirectPath } from "@/utils/navigation";
import { useHandleError } from "@/hooks/useHandleError";
import Load from "@/common/loader/Load";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleLogin, status } = useLogin();
  const { handleError } = useHandleError();

  const { autoCloseAlert } = useAlert();
  const navigate = useNavigate();

  const handleAuth = async (user) => {
    try {
      const result = await handleLogin(user);
      autoCloseAlert(`Bienvenido ${result.data.nombreCompleto}`, "success");
      navigate(getRedirectPath(result.data.rol));
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <section className="d-flex sectionTop px-2 containerLogin d-flex justify-content-center">
      <div className="containerFormLogin  text-white d-flex flex-column rounded-2 gap-3">
        <h1 className="my-4 text-center">Inicia sesión</h1>
        <Form
          className="px-3 px-md-5 pb-2 text-white formText"
          onSubmit={handleSubmit(handleAuth)}
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailLogin">Correo electrónico</Form.Label>
            <Form.Control
              title="Ingresa tu correo eléctrónico"
              type="email"
              id="emailLogin"
              className="py-xl-2 input inputFormLogin"
              placeholder="nombre@gmail.com"
              {...register("correo", correoValidation)}
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
              placeholder="claVe123"
              {...register("clave", claveValidation)}
            />
            <Form.Text className="text-warning">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <button
            className="w-100 mb-3 btnLogin text-white w-100 py-2 rounded-0 border-0 d-flex gap-3 align-items-center justify-content-center"
            type="submit"
          >
            {status === "loading" && <Load></Load>}
            <span>Ingresar</span>
          </button>
          <div className="d-flex flex-column w-100">
            <Link to="/error404" className="text-white text-center">
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
              <Link to={"/auth/register"} className="text-white">
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
