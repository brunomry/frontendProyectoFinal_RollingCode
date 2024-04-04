import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { Button, Form } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <section className="mainSection px-2 pt-2 pb-5">
      <div className="container-md">
        <h1 className="mt-5 titleColor">Nuevo producto</h1>
        <hr className="container-md text-start my-0 mb-4" />
      </div>
      <Form className="my-4 mx-auto border border border-1 border-white formProduct px-3 px-sm-5 py-4 rounded-2">
        <p className="mb-4 fw-bold">
          Los campos obligatorios están marcados con{" "}
          <span className="text-danger fw-bold">*</span>
        </p>
        <Form.Group className="mb-3 " controlId="formProductName">
          <Form.Label className="fw-bold">
            Nombre de producto <span className="">*</span>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formDescription">
          <Form.Label className="fw-bold">
            Descripción <span className="">*</span>
          </Form.Label>
          <Form.Control className="textarea" type="text" as="textarea" />
        </Form.Group>
        <div className="row">
          <Form.Group className="mb-3 col-sm-4" controlId="formCategory">
            <Form.Label className="fw-bold">
              Categoría <span className="">*</span>
            </Form.Label>
            <Form.Select>
              <option value="">seleccione</option>
              <option value="Pizzas">Pizzas</option>
              <option value="Empanadas">Empanadas</option>
              <option value="Hamburguesas">Hamburguesas</option>
              <option value="Pastas">Pastas</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-sm-4" controlId="formState">
            <Form.Label className="fw-bold">
              Estado <span className="">*</span>
            </Form.Label>
            <Form.Select>
              <option value="">seleccione</option>
              <option value="">Disponible</option>
              <option value="">No disponible</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-sm-4" controlId="formPrice">
            <Form.Label className="fw-bold">
              Precio <span className="">*</span>
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label className="fw-bold">
            URL de imagen <span className="">*</span>
          </Form.Label>
          <Form.Control type="url" />
        </Form.Group>
        <div className="text-end">
          <Form.Group className="mb-3 ">
            <Button
              type="submit"
              variant="success"
              className="btnAddProduct border border-white border-2 fw-bold px-4 px-sm-5 me-2"
            >
              Agregar
            </Button>
            <Link
              className="btnCancel btn border border-white border-2 text-white fw-bold px-3 px-sm-5"
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
