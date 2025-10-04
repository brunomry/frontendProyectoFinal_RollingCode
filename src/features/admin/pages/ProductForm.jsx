import { useParams, useNavigate } from "react-router-dom";
import "../styles/admin.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import useAlert from "@/hooks/useAlert";
import {
  categoryValidation,
  descriptionValidation,
  imageValidation,
  nameValidation,
  priceValidation,
  stateValidation,
} from "../validations.js/productValidations";
import { useHandleError } from "@/hooks/useHandleError";
import { useSelector } from "react-redux";
import { useCloudinary } from "../../../hooks/useCloudinary";

const ProductForm = ({ show, update, title, disabled, hidden }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();

  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const { getProduct, putProduct, postProduct, getProducts } = useProduct();
  const { customAlert, autoCloseAlert } = useAlert();
  const { handleError } = useHandleError();
  const { uploadImage } = useCloudinary();
  const navigate = useNavigate();
  const [img, setImg] = useState("");

  useEffect(() => {
    if (show) {
      getProduct(id).then((product) => {
        if (product) {
          setValue("nombre", product.nombre);
          setValue("detalle", product.detalle);
          setValue("categoria", product.categoria);
          setValue("estado", product.estado);
          setValue("precio", product.precio);
          setValue("imagen", product.imagen);
        }
      });
    }
  }, [id, setValue]);

  const imagenValue = watch("imagen");

  useEffect(() => {
    if (imagenValue instanceof File) {
      setImg(URL.createObjectURL(imagenValue));
    }
    if (typeof imagenValue === "string") {
      setImg(imagenValue);
    }
  }, [imagenValue]);

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("imagen", file);
    setImg(URL.createObjectURL(file));
  };

  const handleProduct = async (product) => {
    try {
      let imgURL = product.imagen;

      if (imgURL instanceof File) {
        imgURL = await uploadImage(product.imagen);
      }

      const newProduct = {
        nombre: product.nombre,
        detalle: product.detalle,
        categoria: product.categoria,
        estado: product.estado,
        precio: product.precio,
        imagen: imgURL,
      };

      if (update) {
        customAlert("¿Confirmar cambios en el menú?", async () => {
          await putProduct(newProduct, id);
          await getProducts();
          autoCloseAlert("El menú fue actualizado", "success");
          navigate(`/admin/productos/ver-menu/${id}`);
        });
      } else {
        await postProduct(newProduct);
        await getProducts();
        autoCloseAlert(`El menú fue agregado`, "success");
        reset();
        setImg("");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <section className="mainSection px-2 pt-2 pb-5 sectionTop">
      <div className="container">
        <h1 className="mt-5">{title}</h1>
        <Form
          className="mt-5 border formProduct px-3 px-5 pt-5 rounded-2 shadow"
          onSubmit={handleSubmit(handleProduct)}
        >
          <p className={`mb-4  ${hidden ? "d-none" : ""}`}>
            Los campos obligatorios están marcados con{" "}
            <span className="text-danger ">*</span>
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label className="">
              Nombre de producto{" "}
              <span className={`text-danger ${hidden ? "d-none" : ""}`}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              className="text-secondary"
              disabled={disabled}
              {...register("nombre", nameValidation)}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="">
              Descripción{" "}
              <span className={`text-danger ${hidden ? "d-none" : ""}`}>*</span>
            </Form.Label>
            <Form.Control
              className="textarea text-secondary"
              type="text"
              as="textarea"
              disabled={disabled}
              {...register("detalle", descriptionValidation)}
            />
            <Form.Text className="text-danger">
              {errors.detalle?.message}
            </Form.Text>
          </Form.Group>
          <div className="row">
            <Form.Group className="mb-3 col-sm-4">
              <Form.Label className="">
                Categoría{" "}
                <span className={`text-danger ${hidden ? "d-none" : ""}`}>
                  *
                </span>
              </Form.Label>
              <Form.Select
                className="text-secondary"
                disabled={disabled}
                {...register("categoria", categoryValidation)}
              >
                <option value="">seleccione</option>
                <option value="Pizzas">Pizzas</option>
                <option value="Empanadas">Empanadas</option>
                <option value="Hamburguesas">Hamburguesas</option>
                <option value="Pastas">Pastas</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 col-sm-4">
              <Form.Label className="">
                Estado{" "}
                <span className={`text-danger ${hidden ? "d-none" : ""}`}>
                  *
                </span>
              </Form.Label>
              <Form.Select
                className="text-secondary"
                disabled={disabled}
                {...register("estado", stateValidation)}
              >
                <option value="">seleccione</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 col-sm-4">
              <Form.Label className="">
                Precio{" "}
                <span className={`text-danger ${hidden ? "d-none" : ""}`}>
                  *
                </span>
              </Form.Label>
              <Form.Control
                className="text-secondary"
                type="number"
                disabled={disabled}
                {...register("precio", priceValidation)}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label className="">
              Imagen{" "}
              <span className={`text-danger ${hidden ? "d-none" : ""}`}>*</span>
            </Form.Label>
            <div className="d-flex gap-3 align-items-center">
              <Form.Control
                className="text-secondary d-none"
                type="file"
                name="img"
                id="img"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                disabled={disabled}
                {...register("imagen", {
                  imageValidation,
                  onChange: (e) => {
                    changeImage(e);
                  },
                })}
              />
              <div className="containerImg">
                {img ? (
                  <img src={img} className="imgProductForm rounded-3 mt-2" />
                ) : (
                  <div className="preview d-flex justify-content-center align-items-center rounded-3">
                    <span>Vista previa</span>
                  </div>
                )}
              </div>
              <label
                htmlFor="img"
                className={`btnImg py-2 px-4 rounded-3 mt-2 "d-none" : "d-block"}`}
              >
                Cargar
              </label>
            </div>

            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <div className="text-end">
            <Form.Group className="mb-3 ">
              <Button
                type="submit"
                variant="success"
                className={`  px-4 px-sm-5 py-2 ${
                  hidden ? "d-none" : "btnAddProduct"
                }`}
              >
                {hidden ? "Agregar" : "Guardar"}
              </Button>
            </Form.Group>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ProductForm;
