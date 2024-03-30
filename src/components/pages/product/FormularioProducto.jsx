import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { Button, Form } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <section className="mainSection">
      <div className="container">
        <h1 className="display-4 mt-5">Nuevo producto</h1>
        <hr className="sizeForm text-start my-0 mb-4" />
      </div>
      <Form className="my-4 sizeForm mx-auto container border border border-1 border-dark formProduct px-3 px-sm-5 py-3">
        <p className="">
          Los campos obligatorios están marcados con{" "}
          <span className="text-danger fw-bold">*</span>
        </p>
        <Form.Group className="mb-3 " controlId="formNombreProducto">
          <Form.Label className="fw-medium">
            Nombre de producto <span className="">*</span>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formDescripcion">
          <Form.Label className="fw-medium">
            Descripción <span className="">*</span>
          </Form.Label>
          <Form.Control className="textarea" type="text" as="textarea" />
        </Form.Group>
        <div className="row">
          <Form.Group className="mb-3 col-md-4" controlId="formCategoria">
            <Form.Label className="fw-medium">
              Categoría <span className="">*</span>
            </Form.Label>
            <Form.Select className="" />
          </Form.Group>
          <Form.Group className="mb-3 col-md-4" controlId="formEstado">
            <Form.Label className="fw-medium">
              Estado <span className="">*</span>
            </Form.Label>
            <Form.Select />
          </Form.Group>
          <Form.Group className="mb-3 col-md-4" controlId="formPrecio">
            <Form.Label className="fw-medium">
              Precio <span className="">*</span>
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label className="fw-medium">
            URL de imagen <span className="">*</span>
          </Form.Label>
          <Form.Control type="url" />
        </Form.Group>
        <div className="text-end">
          <Form.Group className="mb-3 ">
            <Button type="submit" variant="success" className="btnForm px-5 me-2">
              Guardar
            </Button>
            <Link
              className="btn btn-secondary px-5"
              to={"/administrador/productos"}
            >
              Cancelar
            </Link>
          </Form.Group>
        </div>
      </Form>
    </section>
  );
};

export default FormularioProducto;
