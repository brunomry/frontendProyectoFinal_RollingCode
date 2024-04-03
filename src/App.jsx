import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import ModalDetalleProducto from "./components/pages/product/ModalDetalleProducto";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        {" "}
        Ver Detalles
      </Button>
      <ModalDetalleProducto
        show={show}
        setShow={setShow}
        useState={useState}
        handleClose={handleClose}
        handleShow={handleShow}
      ></ModalDetalleProducto>
    </>
  );
}

export default App;
