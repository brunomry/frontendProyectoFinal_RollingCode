import { Link } from "react-router-dom";
import "../../../styles/administrador.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();

  const productoValidado = (producto)=>{
    console.log(producto);
  }

  return (
    <section className="mainSection px-2 pt-2 pb-5">
      <div className="container-md">
        <h1 className="mt-5 titleColor">Nuevo producto</h1>
        <hr className="container-md text-start my-0 mb-4" />
      </div>
      <Form onSubmit={handleSubmit(productoValidado)} className="my-4 mx-auto border border border-1 border-white formProduct px-3 px-sm-5 py-4 rounded-2">
        <p className="mb-4 fw-bold">
          Los campos obligatorios están marcados con{" "}
          <span className="text-danger fw-bold">*</span>
        </p>
        <Form.Group className="mb-3 " controlId="formProductName">
          <Form.Label className="fw-bold">
            Nombre de producto <span className="">*</span>
          </Form.Label>
          <Form.Control type="text"
          {...register("nombre",{
            required: "El nombre del producto es obligatorio",
            minLength:{
              value:5,
              message:"El nombre del producto debe tener como minimo 5 caracteres"
            },
            maxLength:{
              value:25,
              message:"El nombre del producto debe tener como maximo 25 caracteres"
            }
          })}
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formDescription">
          <Form.Label className="fw-bold">
            Descripción <span className="">*</span>
          </Form.Label>
          <Form.Control className="textarea" type="text" as="textarea" 
          {...register("detalle",{
            required:"La descripción del producto es obligatoria",
            minLength:{
              value:10,
              message:"La descripción del producto debe tener como minimo 10 caracteres"
            },
            maxLength:{
              value:50,
              message:"La descripción del producto debe tener como maximo 50 caracteres"
            }
          })}
          />
        </Form.Group>
        <div className="row">
          <Form.Group className="mb-3 col-sm-4" controlId="formCategory">
            <Form.Label className="fw-bold">
              Categoría <span className="">*</span>
            </Form.Label>
            <Form.Select
            {...register("categoria",{
              required:"La categoría del producto es obligatoria"
            })}
            >
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
            <Form.Select
            {...register("estado",{
              required:"El estado del producto es obligatorio"
            })}
            >
              <option value="">seleccione</option>
              <option value="">Disponible</option>
              <option value="">No disponible</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-sm-4" controlId="formPrice">
            <Form.Label className="fw-bold">
              Precio <span className="">*</span>
            </Form.Label>
            <Form.Control type="number" 
            {...register("precio",{
              required:"El precio del producto es obligatorio",
              min:{
                value:3500,
                message:"El precio minimo del producto debe ser 3500"
              },
              max:{
                value:10000,
                message:"El precio maximo del producto debe ser 10000"
              }
            })}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label className="fw-bold">
            URL de imagen <span className="">*</span>
          </Form.Label>
          <Form.Control type="url" 
          {...register("imagen", {
            required: "La imagen es obligatoria",
            pattern: {
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
              message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
            },
          })}
          />
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
