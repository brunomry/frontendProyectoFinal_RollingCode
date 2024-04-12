import "../../../styles/cardProducto.css";
import { Button, Col } from "react-bootstrap";
import { useState } from "react";
import ModalDetalleProducto from "../product/ModalDetalleProducto";
import { Link, useNavigate } from "react-router-dom";

const CardProducto = ({
  producto,
  agregarProductoCarrito,
  productosCarrito,
}) => {
  const [abrirModal, setAbrirModal] = useState(false);

  const navegacion = useNavigate();

  const handleShowModal = () => {
    setAbrirModal(!abrirModal);
  };

  // console.log("card producto: ", producto);

  return (
    <>
      <Col md={6} lg={6} className="d-flex justify-content-center">
        <div className="cardProduct d-flex justify-content-between">
          <div className="cardInformation">
            <div className="cardTitle">
              <h5>{producto.nombre}</h5>
            </div>
            <div className="cardDescription">
              <p className="cardParagraph mb-2">{producto.detalle}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="cardPrice text-center">
                <p>${producto.precio}</p>
              </div>
              <div className="text-center">
                {" "}
                <Button
                  className="cardBTN shadow px-md-3 border border-dark border-1"
                  onClick={handleShowModal}
                >
                  ver más
                </Button>
              </div>
            </div>
          </div>
          <div className="cardIMGContainer">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              title={producto.nombre}
              className="cardIMG"
            />
          </div>
        </div>
      </Col>
      <ModalDetalleProducto
        show={abrirModal}
        handleShowModal={handleShowModal}
        productosCarrito={productosCarrito}
        producto={producto}
        agregarProductoCarrito={agregarProductoCarrito}
      />
    </>
  );
};

export default CardProducto;
