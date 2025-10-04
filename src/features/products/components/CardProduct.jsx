import "../styles/cardProducto.css";
import { Button} from "react-bootstrap";

const CardProducto = ({
  product
}) => {
  return (
    <div
      className="border d-flex flex-column rounded-4 py-3 cardProduct"
    >
      <div className="cardInformation px-3 d-flex flex-column gap-2">
        <div className="w-100 d-flex justify-content-center">
          <img
            src={product.imagen}
            alt={product.nombre}
            title={product.nombre}
            className="cardImg rounded-circle"
          />
        </div>
        <p className="mb-0 fw-bold text-secondary">{product.nombre}</p>
        <p className="text-secondary detailProduct mb-0">{product.detalle}</p>
        <div className="d-flex justify-content-end">
        <p className="my-0 fw-bold price">${product.precio}</p>

        </div>
      </div>
      <div className="w-100 px-3 mt-2">
        {" "}
        <Button
          className="cardBtn px-md-2 border-0 w-100 fw-bold rounded-4 "
        >
          Agregar al Pedido
        </Button>
      </div>
    </div>
  );
};

export default CardProducto;
