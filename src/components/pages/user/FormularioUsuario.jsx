import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/administrador.css';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
  crearUsuarioAdmin,
  enviarDatosCorreo,
  leerUsuariosAPI,
} from '../../../helpers/queries';

const FormularioUsuario = ({ superAdmin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (superAdmin == false) {
    window.location.href = '/administrador';
  }

  //validacion

  const usuarioValidado = async (usuario) => {
    const listaUsuarios = await leerUsuariosAPI();
    const usuarioBuscado = listaUsuarios.find(
      (u) => u.correo === usuario.correo
    );
    console.log(usuario);
    if (!usuarioBuscado) {
      let timerInterval;
      Swal.fire({
        title: 'Espere un momento',
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
      const respuesta = await crearUsuarioAdmin(usuario);
      if (respuesta.status === 201) {
        Swal.fire({
          title: 'El usuario se cargo correctamente',
          html: 'Se envió un correo de verificacion a la bandeja de entrada (principal o spam) del usuario',
          icon: 'success',
        });
        const direccionCorreo = { correo: usuario.correo };
        await enviarDatosCorreo(direccionCorreo);
        reset();
      }
    } else {
      Swal.fire({
        title: 'El correo ingresado ya existe',
        text: 'Por favor ingrese un correo nuevo',
        icon: 'error',
        timer: 3000,
      });
      return;
    }
  };

  return (
    <section className='mainSection px-2 pt-2 pb-5 sectionTop'>
      <div className='container-md'>
        <h1 className='mt-5 titleColor'>Nuevo usuario</h1>
        <hr className='container-md text-start my-0 mb-4' />
      </div>
      <Form
        className='my-4 mx-auto border border border-1 border-white formUser px-3 px-sm-5 py-4 rounded-2'
        onSubmit={handleSubmit(usuarioValidado)}
      >
        <h3 className='mb-4'>
          Campo obligatorio
          <span className='text-danger fw-bold'>*</span>
        </h3>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label className='fw-bold'>
            Nombre completo <span className='text-danger fw-bold'>*</span>
          </Form.Label>
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
          <Form.Label className='fw-bold'>
            Email <span className='text-danger fw-bold'>*</span>
          </Form.Label>
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
          <Form.Label className='fw-bold'>
            Contraseña <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='contraseña'
            {...register('clave', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 8,
                message: 'La contraseña debe contener como minimo 8 caracteres',
              },
              maxLength: {
                value: 16,
                message:
                  'La contraseña debe contener como maximo 16 caracteres',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  'El password debe contener al menos una letra mayúscula, una letra minúscula y un número',
              },
            })}
          />
          <Form.Text className='text-danger'>{errors.clave?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 col-sm-4' controlId='formCategory'>
          <Form.Label className='fw-bold'>
            Categoría <span className='text-danger fw-bold'>*</span>
          </Form.Label>
          <Form.Select
            {...register('rol', {
              required: 'La categoría del producto es obligatoria',
            })}
          >
            <option value=''>seleccione</option>
            <option value='Usuario'>Usuario</option>
            <option value='Administrador'>Administrador</option>
          </Form.Select>
          <Form.Text className='text-danger'>
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <div className='text-end'>
          <Form.Group className='mb-3 d-flex flex-column flex-sm-row gap-3 justify-content-sm-end'>
            <Button
              type='submit'
              variant='success'
              className='border border-white border-2 fw-bold px-4 px-sm-5 btnAddUser'
            >
              Agregar
            </Button>
            <Link
              className='btnCancel btn border border-white border-2 text-white fw-bold px-3 px-sm-5'
              to={'/administrador/usuarios'}
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
