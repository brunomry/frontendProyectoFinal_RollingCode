import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/admin.css';
import { useForm } from 'react-hook-form';
import { claveValidation, correoValidation, nombreValidation } from '@/features/auth/validations/authValidations';

const FormularioUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  return (
    <section className='mainSection px-2 pt-2 pb-5 sectionTop'>
      <div className='container-md'>
        <h1 className='mt-5 titleColor'>Nuevo usuario</h1>
        <hr className='container-md text-start my-0 mb-4' />
      </div>
      <Form
        className='my-4 mx-auto border border border-1 border-white formUser px-3 px-sm-5 py-4 rounded-2'
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
            {...register('nombreCompleto', nombreValidation)}
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
            {...register('correo', correoValidation)}
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
            {...register('clave', claveValidation)}
          />
          <Form.Text className='text-danger'>{errors.clave?.message}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 col-sm-4' controlId='formCategory'>
          <Form.Label className='fw-bold'>
            Rol <span className='text-danger fw-bold'>*</span>
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
