import { Button } from "react-bootstrap";

const ItemProductoUsuario = ({
  carrito,
  producto,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
}) => {
  const productoCarrito = carrito.find(
    (productoBuscado) => productoBuscado.producto == producto._id
  );
  return (
    productoCarrito && (
      <div className="d-flex gap-3 w-100">
        <div className="text-center align-middle">
          <img
            className="imgOrder  rounded-3 "
            title={producto.nombre}
            src={producto.imagen}
            alt={producto.nombre}
          />
        </div>
        <div className="w-100 d-flex flex-column align-items-center gap-md-2 justify-content-center">
          <div className="d-flex justify-content-between w-100">
            <p className="text-center align-middle mb-0">{producto.nombre}</p>
            <a
              disabled={productoCarrito ? false : true}
              title="Eliminar producto"
              onClick={() => quitarProductoCarrito(productoCarrito.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="text-center align-middle d-flex gap-3 align-items-center">
              <Button
                disabled={productoCarrito ? false : true}
                className="py-0 py-md-1"
                variant="secondary"
                onClick={() => quitarCantidadProducto(productoCarrito.id)}
              >
                -
              </Button>
              <span>{productoCarrito?.cantidad}</span>
              <Button
                disabled={productoCarrito ? false : true}
                className="py-0 py-md-1"
                variant="secondary"
                onClick={() => agregarCantidadProducto(productoCarrito.id)}
              >
                +
              </Button>
            </div>
            <p className="text-success text-center mb-0 mt-3 fw-bold ">
              ${producto.precio}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ItemProductoUsuario;
