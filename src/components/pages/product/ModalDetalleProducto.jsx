import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../../../styles/modalDetalleProducto.css";
import { obtenerProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ModalDetalleProducto = ({ show, handleShowModal, producto }) => {
  const [productoDetalle, setDetalleProducto] = useState({});

  useEffect((show) => {
      cargarDetalle();
    },[show]);

  const cargarDetalle = async () => {
    try {
      const respuesta = await obtenerProductoAPI(producto._id);

      if (respuesta.status === 200) {
        const datosProducto = await respuesta.json();
        setDetalleProducto(datosProducto);
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos",
        icon: "error",
      });
      handleShowModal();
    }
  };

  return (
    <Modal show={show} onHide={handleShowModal} centered className="modal">
      <Modal.Header className="modalHeaderIMGContainer">
        <img
          src={productoDetalle.imagen}
          alt={productoDetalle.nombre}
          title={productoDetalle.nombre}
          className="modalIMG"
        />
      </Modal.Header>
      <Modal.Body className="pt-1">
        <h4 className="mb-1">{productoDetalle.nombre}</h4>
        <p className="text-success price mb-1 fw-bold">
          ${productoDetalle.precio}
        </p>
        <p>{productoDetalle.detalle}</p>
        <Form>
          <Form.Group className="mb-3">
            <div className="d-flex flex-row gap-3 gap-md-1 align-items-center justify-content-center quantityProductos mt-2">
              <Button className="mx-sm-3" variant="secondary">
                -
              </Button>
              {1}
              <Button className="mx-sm-3" variant="secondary">
                +
              </Button>
            </div>
          </Form.Group>
          <div className="d-flex containerBTN">
            <Button
              className="btn btn-secondary closeBTN"
              onClick={handleShowModal}
            >
              Cerrar
            </Button>
            <Button className="addBTN btn-success" type="submit">
              <i className="fa-solid fa-plus fa-lg"></i> Agregar a Mi Pedido
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetalleProducto;
