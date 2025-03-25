import ItemProductoUsuario from "./ItemProductoUsuario";

const ListaProductosUsuario = ({
  carrito,
  productosCarrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
}) => {
  return (
    <div className="col-lg-6">
        <h2 className="text-start">Tu lista de productos</h2>
        <article className="containerProductsOrder px-2 py-4 p-md-4 d-flex flex-column gap-4 rounded-4">
          {productosCarrito.map((producto) => (
            <ItemProductoUsuario
              carrito={carrito}
              key={producto._id}
              producto={producto}
              agregarCantidadProducto={agregarCantidadProducto}
              quitarCantidadProducto={quitarCantidadProducto}
              quitarProductoCarrito={quitarProductoCarrito}
            />
          ))}
        </article>
    </div>
  );
};

export default ListaProductosUsuario;
