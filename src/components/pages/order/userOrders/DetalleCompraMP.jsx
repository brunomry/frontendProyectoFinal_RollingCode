import { Card, Button } from "react-bootstrap";
import "../../../../styles/detalleCompraMP.css";

const DetalleCompraMP = () => {
  return (
    <section className="pt-3 pb-5 sectionTop px-2 d-flex flex-column justify-content-center align-items-center">
    <div className="text-center">
      <h1 className="my-4">Detalle de Compra</h1>
      <p>
        Tu pedido fue realizado correctamente. Tenemos habilitada la opción de
        pago mediante MERCADOPAGO.
      </p>
    </div>

    <div className="mt-3 text-start card cardMP border border-1 border-dark shadow ">
      <Card.Header className="fw-bold d-flex justify-content-between">
        <span>
          Retiro en Local
        </span>
        <span>fecha-hora</span>
      </Card.Header>
      <Card.Body>
        <div>
          <p>
            <span className="fw-bold">Nombre:</span>
            <span className="fw-normal"> Bruno</span>
          </p>
          <div className="mt-3 text-center">
            <span className="fw-bold fs-5">Total:</span>{" "}
            <span className="text-danger fs-5 fw-bold">$10</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 align-items-center justify-content-center px-lg-5 pt-3">
          <small className="fs-6 text-center">
            Puedes realizar el pago con MERCADOPAGO
          </small>
          <i
            className="fa-solid fa-arrow-down ms-1 text-dark"
          ></i>

          <Button
            className="btn border btn-success btnPay text-white fw-bold px-5"
          >
            PAGAR
          </Button>
        </div>
      </Card.Body>
    </div>
    <div className="text-center mt-4">
      <Button className="mt-2 btn btn-warning border border-1 border-dark btnBuy fw-bold px-4">
        Ir a <span>MIS PEDIDOS</span>
      </Button>
    </div>
  </section>
  );
};

export default DetalleCompraMP;