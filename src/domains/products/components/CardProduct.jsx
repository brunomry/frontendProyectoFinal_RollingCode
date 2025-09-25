import "../styles/cardProducto.css";
import { Button} from "react-bootstrap";

const CardProducto = ({
  product
}) => {
  return (
    <div
      className="border d-flex flex-column rounded-4 py-3 cardProduct"
      title="Clic para ver más"
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
        <p className="mb-0 fw-semibold title">{product.nombre}</p>
        <p className="text-secondary detailProduct mb-0">{product.detalle}</p>
        <p className="my-0 fw-bold ">${product.precio}</p>
      </div>
      <div className="w-100 px-3 mt-2">
        {" "}
        <Button
          className="cardBtn px-md-2 border-0 w-100 rounded-4 "
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default CardProducto;
