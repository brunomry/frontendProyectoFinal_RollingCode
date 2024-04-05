import "../../../styles/cardProducto.css";
import { Button, Col, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalDetalleProducto from "../product/ModalDetalleProducto";


const CardProducto = ({producto}) => {

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

  return (
    <>
    <Col md={6} lg={6} className="d-flex justify-content-center">
      <div className="cardProduct d-flex">
        <div className="cardInformation">
          <div className="cardTitle">
            <h5>{producto.nombre}</h5>
          </div>
          <div className="cardDescription">
            <p className="cardParagraph mb-2">
             {producto.detalle}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="cardPrice text-center">
              <p>${producto.precio}</p>
            </div>
            <div className="text-center">
              {" "}
              <Button className="cardBTN shadow px-md-3 border border-dark border-1" onClick={handleShow}>ver más</Button>
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
        show={show}
        setShow={setShow}
        useState={useState}
        handleClose={handleClose}
        handleShow={handleShow}
      ></ModalDetalleProducto>
    </>
    
  );
};

export default CardProducto;
