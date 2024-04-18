import { Form } from "react-bootstrap";
import "../../../styles/administrador.css";

const FormularioUsuario = ({titulo, boton}) => {
  return (
    <section className="mainSection px-2 pt-2 pb-5 sectionTop">
      <div className="container-md">
        <h1 className="mt-5 titleColor">{titulo}</h1>
        <hr className="container-md text-start my-0 mb-4" />
      </div>
      <Form className="my-4 mx-auto border border border-1 border-white formProduct px-3 px-sm-5 py-4 rounded-2">
        <h3 className="mb-4">
          Campo obligatorio
          <span className="text-danger fw-bold">*</span>
        </h3>
        <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label className="fw-bold">Nombre completo:</Form.Label>
            <Form.Control
              type='text'
              placeholder='nombre'
            />
            <Form.Text className='text-danger'>
            </Form.Text>
          </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioUsuario;
