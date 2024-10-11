import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../styles/modalDetalleProducto.css";
import { Link } from "react-router-dom";

const ModalDetalleProducto = ({
  show,
  handleShowModal,
  producto,
  agregarProductoCarrito,
  productosCarrito,
  usuarioLogeado,
}) => {
  const [cantidad, setCantidad] = useState(1);
  const [productoEncontrado, setProductoEncontrado] = useState();

  const agregar = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
    if (productosCarrito) {
      const productoEncontradoAux = productosCarrito.find(
        (productoCarrito) => productoCarrito._id == producto._id
      );

      setProductoEncontrado(productoEncontradoAux);
    }
  }, [productosCarrito]);

  return (
    <Modal show={show} onHide={handleShowModal} centered className="modal w-100">
      <div className="p-3 pb-4 rounded-2 d-flex flex-column gap-2 modalProduct border border-secondary">
        <div className="d-flex justify-content-end">
          <a className="text-secondary" onClick={handleShowModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </a>
        </div>
        <div className="mb-2 text-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            title={producto.nombre}
            className="modalImg rounded-circle"
          />
        </div>
        <p className="priceModal fw-bold mb-0 text-success text-center">
          ${producto.precio}
        </p>
        <p className="mb-0 fw-normal text-white text-center">
          {producto.nombre}
        </p>
        <p className="fw-normal mb-0 text-secondary text-center">
          {producto.detalle}
        </p>
        <div>
          {!productoEncontrado && usuarioLogeado.rol != "Administrador" && (
            <Form.Group className="mb-3">
              <div className="d-flex flex-row gap-3 align-items-center justify-content-center quantityProductos">
                <Button
                  className="fs-4 py-0"
                  variant="secondary"
                  onClick={quitar}
                >
                  -
                </Button>
                <span className="text-white">{cantidad}</span>
                <Button
                  className="fs-4 py-0"
                  variant="secondary"
                  onClick={agregar}
                >
                  +
                </Button>
              </div>
            </Form.Group>
          )}
          <div className="d-flex containerBTN mt-3 justify-content-center">
            {productoEncontrado && usuarioLogeado.rol != "Administrador" && (
              <Link
                to="/pedido/miPedido"
                className="btnOrder mt-3 py-3 px-5 rounded-5"
              >
                ir a Mi Pedido
              </Link>
            )}
            {!productoEncontrado && usuarioLogeado.rol != "Administrador" && (
              <Button
                className="btnAddProduct py-3 px-5 rounded-5"
                type="submit"
                onClick={() => {
                  agregarProductoCarrito(producto, cantidad);
                }}
              >
                <i className="fa-solid fa-plus fa-lg"></i> Agregar a Mi Pedido
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetalleProducto;
