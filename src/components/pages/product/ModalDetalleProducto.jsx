import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../../../styles/modalDetalleProducto.css";

const ModalDetalleProducto = ({
  show,
  setShow,
  useState,
  handleClose,
  handleShow,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="modalHeaderIMGContainer">
          <img
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen del producto"
            className="modalIMG"
          />
        </Modal.Header>
        <Modal.Body>
          <h4>Nombre del producto</h4>
          <p className="fs-3 text-success">$55555</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aspernatur adipisci harum aliquid nam distinctio quo modi magni odio
            dignissimos?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="addBTN"><i class="fa-solid fa-plus fa-lg"></i> Agregar a Mi Pedido</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDetalleProducto;
