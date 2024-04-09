import { Button, Form, FormCheck } from "react-bootstrap";
import imgRegistro from "../../assets/imgRegistro.jpg";
import { Link } from "react-router-dom";
import "../../styles/registro.css";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()

  const usuarioValidado = async (usuario)=>{
    const listaUsuarios = await leerUsuariosAPI();
    const usuarioBuscado = listaUsuarios.find(
      (u) => u.correo === usuario.correo
    );
    if (!usuarioBuscado) {
      let timerInterval;
    Swal.fire({
      title: "Espere un momento",
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
        console.log("I was closed by the timer");
      }
    });
      const respuesta = await crearUsuarioAPI(usuario);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Te registraste exitosamente",
          text: "POR FAVOR INICIA SESIÓN",
          icon: "success",
        })
        reset();
      }
    }
  }

  return (
    <div className="d-flex">
      <section className="sectionRegistroImage d-none d-sm-block">
        <img src={imgRegistro} alt="mesa con menú" title="mesa con menú" className="imgRegistro h-100" />
      </section>
      <section className="sectionRegistro bg-white">
        <div className="text-center">
          <h1 className="mt-3">Regístrate</h1>
        </div>
        <Form className="px-2 px-md-5 pb-2 formText" onSubmit={handleSubmit(usuarioValidado)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y Apellido:</Form.Label>
            <Form.Control type="text" placeholder="nombre" 
            {...register("nombreCompleto",{
              required:"El nombre y apellido son obligatorios",
              minLength:{
                value:7,
                message:"El nombre de usuario debe tener como minimo 7 caracteres"
              },
              maxLength:{
                value:30,
                message:"El nombre de usuario debe tener como maximo 30 caracteres"
              }
            })}
            />
            <Form.Text className="text-danger">
            {errors.nombreCompleto?.message}
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="email" 
            {...register("correo",{
              required:"El email es obligatorio",
              minLength:{
                value:3,
                message:"El email debe contener al menos 3 caracteres"
              },
              maxLength:{
                value:265,
                message:"El email debe contener como máximo 265 caracteres"
              },
              pattern:{
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message:"Ingrese una dirección de correo electrónico válida",
              }
            })}
            />
            <Form.Text className="text-danger">
            {errors.correo?.message}
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="contraseña" 
            {...register("clave",{
              required:"La contraseña es obligatoria",
              minLength:{
                value:8,
                message:"La contraseña debe contener como minimo 8 caracteres"
              },
              maxLength:{
                value:16,
                message:"La contraseña debe contener como maximo 16 caracteres"
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:"El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
              },
            })}
            />
            <Form.Text className="text-danger">
            {errors.clave?.message}
          </Form.Text>
          </Form.Group>
          <Button className="w-100 mb-3" variant="success" type="submit">
            Registrarme
          </Button>
          <div className="d-flex mb-3">
            <FormCheck className="pe-2"></FormCheck>
            <p className="fw-normal mt-0">Recibir Descuentos y Promociones por Email</p>
          </div>
          <Link to="./error404" className="btn btn-outline-danger w-100 mb-3">
          <i className="fa-brands fa-google"></i> Registrarme con Google
          </Link>
          <Link to="./error404" className="btn btn-outline-primary w-100 mb-3 mb-md-5">
          <i className="fa-brands fa-facebook"></i> Registrarme con Facebook
          </Link>
          <p className="text-center">
            ¿Ya tienes una cuenta? <Link to={"/login"}>Iniciar sesión</Link>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Registro;