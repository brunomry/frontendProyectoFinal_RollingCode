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
      <tr>
        <td className="text-center align-middle">
          <img
            className="img-order p-2"
            title={producto.nombre}
            src={producto.imagen}
            alt="comida.jpg"
          />
        </td>
        <td className="text-center align-middle">{producto.nombre}</td>
        <td className="text-center align-middle">${producto.precio}</td>
        <td className="text-center align-middle quantityProductos">
          <Button
            disabled={productoCarrito ? false : true}
            className="mx-3 mx-sm-3"
            variant="secondary"
            onClick={() => quitarCantidadProducto(productoCarrito.id)}
          >
            -
          </Button>
          {productoCarrito?.cantidad}
          <Button
            disabled={productoCarrito ? false : true}
            className="mx-3 mx-sm-3"
            variant="secondary"
            onClick={() => agregarCantidadProducto(productoCarrito.id)}
          >
            +
          </Button>
        </td>
        <td className="text-center align-middle">
          <Button
            disabled={productoCarrito ? false : true}
            variant="danger"
            title="Eliminar producto"
            onClick={() => quitarProductoCarrito(productoCarrito.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </td>
      </tr>
    )
  );
};

export default ItemProductoUsuario;
