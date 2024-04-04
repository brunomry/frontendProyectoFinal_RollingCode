import "../../../styles/cardProducto.css";
import { Button, Col, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalDetalleProducto from "../product/ModalDetalleProducto";


const CardProducto = () => {

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);



  return (
    <>
    <Col md={6} lg={6} className="d-flex justify-content-center">
      <div className="cardProduct d-flex">
        <div className="cardInformation">
          <div className="cardTitle">
            <h5>Título producto</h5>
          </div>
          <div className="cardDescription">
            <p className="cardParagraph mb-2">
              Aquí va una descripción breve del producto que contenga
              informacion básica sobre el mismo
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="cardPrice text-center">
              <p>$55555</p>
            </div>
            <div className="text-center">
              {" "}
              <Button className="cardBTN shadow px-md-3 border border-dark border-1" onClick={handleShow}>ver más</Button>
            </div>
          </div>
        </div>
        <div className="cardIMGContainer">
          <img
            src="https://images.pexels.com/photos/13998632/pexels-photo-13998632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen de prueba"
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
