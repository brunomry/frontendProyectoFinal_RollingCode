import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../../../styles/modalDetalleProducto.css";

const ModalDetalleProducto = ({
  show,
  setShow,
  useState,
  handleClose,
  handleShow,
}) => {
  return (
      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header className="modalHeaderIMGContainer">
          <img
            src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen del producto"
            className="modalIMG"
          />
        </Modal.Header>
        <Modal.Body>
          <h4 className="mb-1">Nombre del producto</h4>
          <p className="text-success price mb-1">$55555</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aspernatur adipisci harum aliquid nam distinctio quo modi magni odio
            dignissimos?
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="cantidad" required />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button className="btn btn-secondary closeBTN" onClick={handleClose}>Cerrar</Button>
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
