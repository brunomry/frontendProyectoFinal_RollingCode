import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { useForm } from "react-hook-form";

const FormularioUsuario = ({titulo}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  return (
    <section className="mainSection px-2 pt-2 pb-5 sectionTop">
      <div className="container-md">
        <h1 className="mt-5 titleColor">{titulo}</h1>
        <hr className="container-md text-start my-0 mb-4" />
      </div>
      <Form 
      className="my-4 mx-auto border border border-1 border-white formProduct px-3 px-sm-5 py-4 rounded-2"
      onSubmit={handleSubmit()}
      >
        <h3 className="mb-4">
          Campo obligatorio
          <span className="text-danger fw-bold">*</span>
        </h3>
        <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label className="fw-bold">Nombre completo:</Form.Label>
            <Form.Control
              type='text'
              placeholder='nombre'
              {...register('nombreCompleto', {
                required: 'El nombre y apellido son obligatorios',
                minLength: {
                  value: 7,
                  message:
                    'El nombre de usuario debe tener como minimo 7 caracteres',
                },
                maxLength: {
                  value: 30,
                  message:
                    'El nombre de usuario debe tener como maximo 30 caracteres',
                },
              })}
            />
            <Form.Text className='text-danger'>
            {errors.nombreCompleto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label className="fw-bold">Email:</Form.Label>
            <Form.Control
              type='email'
              placeholder='email'
              {...register('correo', {
                required: 'El email es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El email debe contener al menos 3 caracteres',
                },
                maxLength: {
                  value: 265,
                  message: 'El email debe contener como máximo 265 caracteres',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Ingrese una dirección de correo electrónico válida',
                },
              })}
            />
            <Form.Text className='text-danger'>
            {errors.correo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label className="fw-bold">Contraseña:</Form.Label>
            <Form.Control
              type='password'
              placeholder='contraseña'
            />
            <Form.Text className='text-danger'>
            </Form.Text>
          </Form.Group>
          <div className="text-end">
            <Form.Group className="mb-3">
              <Button
              type="submit"
              variant="success"
              className="border border-white border-2 fw-bold px-4 px-sm-5 me-2 btnAddProduct"
              >
                Agregar
              </Button>
              <Link
              className="btnCancel btn border border-white border-2 text-white fw-bold px-3 px-sm-5"
              to={"/administrador/usuarios"}
              >
                Cancelar
              </Link>
            </Form.Group>
          </div>
      </Form>
    </section>
  );
};

export default FormularioUsuario;
